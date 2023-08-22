import React from "react";
import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import CreateReportModal from "./CreateReportModal";

const ListReports = () => {
    const [reports, setReports] = useState([]);

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
            setReports(reports);
        }

        getAllReports();
    }, []);

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

                {Object.values(reports).map((value, clave) => (
                    <div key={clave} className="col-12 col-md-4">
                        <div className="card reportCard">
                            <div className="rounded">
                                <div className="card-body text-center m-3">
                                    <h5 className="card-title">{value.name?.toUpperCase()}</h5>
                                    <div className="mb-2 mt-4">
                                        <p className="card-text">Obligations {value.obligations?.length}</p>
                                        <p className="card-text">Rights {value.rights?.length}</p>
                                    </div>
                                    <div className="pt-3 text-center">
                                        <Link className="pe-1 darkBlueText" to={`/${value._id}`}>
                                        <i class="bi bi-plus-square-fill"></i>                                       
                                        </Link>
                                        <Link className="ps-1 darkBlueText">
                                        <i class="bi bi-trash3-fill"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </Fragment>
    );

};

export default ListReports;