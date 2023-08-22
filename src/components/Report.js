import React from "react";
import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Report = () => {
    const { reportId } = useParams();
    const [report, setReport] = useState([]);

    useEffect(() => {
        async function getReport() {
            const request = new Request("/api/v1/reports/" + reportId, {
                method: "GET"
            });

            const response = await fetch(request);

            if (!response.ok) {
                throw Error("Response not valid. " + response.status);
            }

            const report = await response.json();
            console.log(report);
            setReport(report);
        };

        getReport();

    }, [reportId]);

    async function getActors(reportId) {
        const request = new Request("/api/v1/roles/" + reportId, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
        });

        const response = await fetch(request);

        if (!response.ok) {
            throw Error("Response not valid. " + response.status);
        }
        const actors = await response.json();
        console.log(actors);
    };

    return (
        <Fragment>
            <div className="row my-2 pb-5">
                <div className="col-12">
                    <h2 className="text-center">{report.name} details</h2>
                </div>
                {report.obligations_actors?.length == 0 ?
                    <div className="col-11 mb-1 text-end">
                        <button type="button" className="btn border-purple text-purple bg-blue mt-4"
                            onClick={() => getActors(report._id)}>
                            Get Actors
                        </button>
                    </div> : <></>
                }
                <div className="col-12 col-md-10 offset-md-1">
                    <div className="card text-center reportDetails">
                        <div className="rounded-top bottomBorder">
                            <div className="card-header bg-transparent">
                                <h5 className="card-title my-2">{report.name?.toUpperCase()}</h5>
                            </div>
                        </div>
                        <div>
                            <div className="card-body">
                                <h5 className="card-title">Document</h5>
                                <p className="card-text">{report.document}</p>
                            </div>
                        </div>
                        <div className="rounded-bottom topBorder">
                            <div className="card-footer text-muted bg-transparent">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Sentence</th>
                                            <th scope="col">Type</th>
                                            <th scope="col">Actor</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {report.obligations?.map((element, index) => (
                                            <tr>
                                                <td>{element}</td>
                                                <td>Obligation</td>
                                                <td>{report.obligations_actors[index]}</td>
                                            </tr>
                                        ))}
                                        {report.rights?.map((element, index) => (
                                            <tr>
                                                <td>{element}</td>
                                                <td>Right</td>
                                                <td>{report.rights_actors[index]}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );

};

export default Report;