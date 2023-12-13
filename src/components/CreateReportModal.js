import { useState } from "react";
import { useDispatch } from "react-redux";
import { addReport, setValidationErrors } from "../slices/reportSlice";
import CustomLoader from "../common/CustomLoader";


function CreateReportModal() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [paragraph, setParagraph] = useState('');
    const [pdfFile, setPdfFile] = useState(null);
    const [loading, setLoading] = useState(false);

    async function createReport() {
        let reportLoader = document.getElementById("reportLoader");
        reportLoader.classList.remove("d-none");

        setLoading(true);

        const data = {
            "name": name,
            "paragraph": paragraph,
            "pdfFile": ""
        };

        if (pdfFile) {
            const reader = new FileReader();
            reader.onload = async (event) => {
                const base64PDF = event.target.result.split(',')[1];
                data.pdfFile = base64PDF;

                try {
                    const response = await fetch('/api/v1/reports', {
                        method: 'POST',
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(data),
                    });

                    if (!response.ok) {
                        dispatch(setValidationErrors(true));
                        setLoading(false);
                        reportLoader.classList.add("d-none");
                        throw Error('Response not valid. ' + response.status);
                    }

                    const report = await response.json();
                    dispatch(setValidationErrors(false));
                    dispatch(addReport(report));
                    setLoading(false);
                    reportLoader.classList.add("d-none");
                } catch (error) {
                    console.error('Error sending request:', error);
                }
            };
            reader.readAsDataURL(pdfFile);
        } else {
            try {
                const response = await fetch('/api/v1/reports', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data),
                });

                if (!response.ok) {
                    dispatch(setValidationErrors(true));
                    setLoading(false);
                    reportLoader.classList.add("d-none");
                    throw Error('Response not valid. ' + response.status);
                }

                const report = await response.json();
                dispatch(setValidationErrors(false));
                dispatch(addReport(report));
                setLoading(false);
                reportLoader.classList.add("d-none");

            } catch (error) {
                console.error('Error sending request:', error);
            }
        }

    }

    return (
        <>
            <div className="modal fade" id="analyzeAgreement" data-bs-backdrop="static" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5">Analyze Agreement</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form encType="multipart/form-data">
                                <div className="mb-3">
                                    <label htmlFor="reportName" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="reportName" maxLength={100} required onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="reportParagraph" className="form-label">Agreement</label>
                                    <p><sub>You can add the text of the SLA or directly attach a pdf file.</sub></p>
                                    <textarea type="text" className="form-control mb-3" id="reportParagraph" onChange={(e) => setParagraph(e.target.value)} />
                                    <input className="form-control" type="file" id="reportDoc" onChange={(e) => setPdfFile(e.target.files[0])} />
                                </div>
                                <div className="text-end">
                                    <button
                                        type="button"
                                        className="btn border-purple text-purple bg-blue mt-4"
                                        data-bs-dismiss="modal"
                                        onClick={createReport}
                                    >
                                        Confirm
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div id="reportLoader" className={`my-3 ${loading ? 'd-block' : 'd-none'}`}>
                <CustomLoader />
            </div>
        </>
    );
}

export default CreateReportModal;
