import React from "react";
import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setReportList, setValidationErrors } from "../slices/reportSlice";
import CreateReportModal from "./CreateReportModal";

const ListReports = () => {
    const dispatch = useDispatch();
    const reportState = useSelector((state) => state.report);

    useEffect(() => {
        async function getAllReports() {
            const request = new Request("/api/v1/reports", {
                method: "GET"
            });

            const response = await fetch(request);

            if (!response.ok) {
                throw Error("Response not valid. " + response.status);
            }

            const reports = await response.json();
            dispatch(setReportList(reports.reverse()));
        }

        getAllReports();
    }, []);

    async function deleteReport(reportId) {
        const request = new Request(`/api/v1/reports/${reportId}`, {
            method: "DELETE"
        });

        const response = await fetch(request);

        if (!response.ok) {
            throw Error("Failed to delete report. " + response.status);
        }

        const updatedReports = Object.values(reportState.reportList).filter(report => report._id !== reportId);
        dispatch(setReportList(updatedReports.reverse()));
    }

    return (
        <Fragment>
            <div className="row my-2 pb-5">
                <div className="col-12">
                    <h2 className="text-center">Services Level Agreements reports</h2>
                </div>
                <div className="col-12 mb-3 text-end">
                    <a className="darkBlueText" href="#create" data-bs-toggle="modal" data-bs-target="#analyzeAgreement"><i className="bi bi-plus-circle h1"></i></a>
                </div>
                <CreateReportModal />
                {reportState.reportList.length === 0 ?
                    (<div className="text-center">No agreements available</div>) :
                    (reportState.reportList.map((report) => {
                        return (
                            <div key={report._id} className="col-12 col-md-4">
                                <div className="card reportCard">
                                    <div className="rounded">
                                        <div className="card-body text-center m-3">
                                            <h5 className="card-title">{report.name?.toUpperCase()}</h5>
                                            <div className="mb-2 mt-4">
                                                <p className="card-text">Obligations {report.obligations?.length}</p>
                                                <p className="card-text">Rights {report.rights?.length}</p>
                                            </div>
                                            <div className="pt-3 text-center">
                                                <Link className="pe-1 darkBlueText" to={`/${report._id}`}>
                                                    <i className="bi bi-plus-square-fill"></i>
                                                </Link>
                                                <Link className="ps-1 darkBlueText" onClick={() => deleteReport(report._id)}>
                                                    <i className="bi bi-trash3-fill"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    }))
                }
            </div>
        </Fragment>
    );

};

export default ListReports;