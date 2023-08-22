import { Link } from "react-router-dom";

function Instructions() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>Instructions</h1>
                    <p>The guide followed for the manual classification of obligations and rights is described below. What is the objective? To have a dataset containing sentences that indicate obligations and rights for both the provider and the customer. As well as phrases that do not belong to any of the above categories, which are simply general conditions to be included in the agreement. This guide should help to understand which clauses belong to which category and to standardize this task as much as possible.</p>
                    <p>To carry out the classification, it is necessary to follow a series of steps, taking into account that sometimes there may be exceptions that do not fit these procedures, but we focus on the generality:</p>
                    <ol>
                        <li>Select the agreement we wish to analyze.</li>
                        <li>Follow the following instructions as a reference.</li>
                        <li>Perform a general reading of the agreement.</li>
                        <li>Exclude the definitions and exceptions sections of the agreement.</li>
                        <li>Pay attention to the verb contained in the sentence.</li>
                        <li>Observe if any of the clauses correspond to the situations described below.</li>
                    </ol>
                    <div className="mt-4 pt-2">
                        <h2 className="mb-3">Categories:</h2>
                        <table class="table"><thead>
                            <tr>
                                <th scope="col">Number</th>
                                <th scope="col">Category</th>
                                <th scope="col">Definition</th>
                            </tr>
                        </thead>
                            <tbody>
                                <tr class="table-danger">
                                    <th scope="row">0</th>
                                    <td>Obligation</td>
                                    <td>Promise, acknowledgment, or agreement (as a contract) that binds one to a specific performance (as payment).</td>
                                </tr>
                                <tr class="table-success">
                                    <th scope="row">1</th>
                                    <td>Right</td>
                                    <td>Something to which one has a just claim.</td>
                                </tr>
                                <tr class="table-warning">
                                    <th scope="row">2</th>
                                    <td>Neither</td>
                                    <td>Sentences that do not indicate obligation or right, they are merely informative or conditional.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-4 pt-2">
                        <h2 className="mb-3">General information:</h2>
                        <p>There are some parts of the agreement that normally do not contain obligations or rights so we can dispense with an in-depth analysis, see list below.</p>
                        <ol>
                            <li>Definitions section: the meanings of the terms of the agreement are indicated and should not contain obligations or rights.</li>
                            <li>Exceptions section: the causes that would make the agreement invalid are defined, they do not usually involve a person, they are natural events.</li>
                        </ol>
                        <p>The first step in determining whether a sentence is an obligation or a right is to identify whether it expresses an action. To do this, it is necessary to observe whether what is stated in the clause involves activity performed by a person. In that case, to determine the category to which it belongs, we can pay attention to the verb used in the clause, especially if it includes a modal verb, as proposed in other approaches studied. Modal verbs, expressing obligation, right, future, possibility or promise:</p>

                        <table class="table"><thead>
                            <tr>
                                <th scope="col">Category</th>
                                <th scope="col">Possibilities</th>
                            </tr>
                        </thead>
                            <tbody>
                                <tr class="table-danger">
                                    <td>Obligation</td>
                                    <td>Should, must, cannot, can only be used to</td>
                                </tr>
                                <tr class="table-success">
                                    <td>Right</td>
                                    <td>To be eligible to recive, will be entitled to, have the right to </td>
                                </tr>
                                <tr>
                                    <td>Both</td>
                                    <td>Shall, will or may </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-4 pt-2">
                        <h2 className="mb-3">Specific characteristics of the domain:</h2>
                        <p>What possibilities do we have? Each of the parties involved in the agreement must have different obligations and rights. Normally, the provider is obliged to offer a service and the customer is obliged to pay for it, i.e. they have different profiles in the legal relationship and, therefore, the obligations and rights are defined by different characteristics depending on the actor.</p>
                        <p>The following tables will present in detail the situations we have addressed and the decisions we have made. Specifically, the circumstances will be presented from both points of view, together with their respective assigned categories.</p>

                        <h4 className="my-3 pt-4">Provider obligations</h4>
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Concept</th>
                                    <th scope="col">Examples</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="">
                                    <td>
                                        Provision of services at expected performance
                                    </td>
                                    <td>
                                        <ol>
                                            <li>"AWS <strong>will use</strong> commercially reasonable efforts to make Alexa for Business available (…) of at least 99.9%"</li>
                                        </ol>
                                    </td>
                                </tr>
                                <tr class="">
                                    <td>
                                        Everything related to the delivery of the financial compensation (review, delivery time, etc.).                                                </td>
                                    <td>
                                        <ol>
                                            <li>"We <strong>will issue</strong> the Service Credits to you within one billing cycle following the month in which the credit request occurred."</li>
                                            <li>"Google <strong>will make</strong> a determination in good faith based on its system logs, monitoring reports (…)"</li>
                                        </ol>
                                    </td>
                                </tr>
                                <tr class="">
                                    <td>
                                        Availability of technical support for the notification of an incident
                                    </td>
                                    <td>
                                        <ol>
                                            <li>"Verizon <strong>will respond</strong> to Denial-of-Service attacks reported by Customer within 15 minutes of Customer opening a complete trouble ticket with Verizon Customer Support."</li>
                                            <li>"CenturyLink <strong>is responsible</strong> for maintaining all CenturyLink owned facilities that are used to deliver CE to the customer. CenturyLink will furnish the Customer with a trouble reporting telephone number."</li>
                                        </ol>
                                    </td>
                                </tr>
                                <tr class="">
                                    <td>
                                        Notification of changes in the agreement
                                    </td>
                                    <td>
                                        <ol>
                                            <li>"Scheduled maintenance for Restore will mean any Backup Services systems-related (...) which Customer <strong>is notified</strong> 72 hours in advance."</li>
                                        </ol>
                                    </td>
                                </tr>
                                <tr class="">
                                    <td>
                                        Provide data control assistance in a timely manner.
                                    </td>
                                    <td>
                                        <ol>
                                            <li>"Verizon <strong>will facilitate</strong> successful restores of backed up data to the original device."</li>
                                        </ol>
                                    </td>
                                </tr>
                                <tr class="">
                                    <td>
                                        Manage system outages.
                                    </td>
                                    <td>
                                        <ol>
                                            <li>"Service interruptions due to emergency maintenance will constitute Unavailability Exclusions equivalent to scheduled maintenance windows, provided that (1) OVHcloud <strong>notifies</strong> You of such emergency maintenance as soon as possible and (2) downtime due to emergency maintenance does not exceed four (4) hours in any month."</li>
                                        </ol>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <h4 className="my-3 pt-4">Provider rights</h4>

                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Concept</th>
                                    <th scope="col">Examples</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="">
                                    <td>
                                        Actions related to the delivery of compensation or limitations that give control to the provider.                                    </td>
                                    <td>
                                        <ol>
                                            <li>"Please note that NTTA <strong>reserves the right in all cases to</strong> determine the root cause of an outage and make the final determination (…) the below Service Level Agreement exceptions."</li>
                                            <li>"We <strong>may issue</strong> the Service Credits to the credit card you used to pay for the billing cycle in which the unavailability occurred."</li>
                                            <li>"OVHcloud’s monitoring tools, data and records <strong>will be the sole source</strong> of information used to track and validate Availability."</li>
                                        </ol>
                                    </td>
                                </tr>
                                <tr class="">
                                    <td>
                                        Modifying the agreement or the services offered.
                                    </td>
                                    <td>
                                        <ol>
                                            <li>"Verizon <strong>reserves the right to</strong> perform maintenance outside of Scheduled Maintenance during an emergency situation."</li>
                                        </ol>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <h4 className="my-3 pt-4">Customer obligations</h4>

                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Concept</th>
                                    <th scope="col">Examples</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="">
                                    <td>
                                        Payment and use of the services indicated in the applicable policy.
                                    </td>
                                    <td>
                                        <ol>
                                            <li>"This SLA <strong>is available to</strong> Customers with a minimum of a one-year commitment for each Service."</li>
                                            <li>"You <strong>will not be eligible to</strong> receive a Service Credit if: (i) Your Account has any payments for the OVHcloud Service that are delinquent, (ii) You are in violation of the Terms of Service during the time of the incident, or (iii) the incident was due to Your failure to meet Your security responsibilities as set forth in the Terms of Service"</li>
                                        </ol>
                                    </td>
                                </tr>
                                <tr class="">
                                    <td>
                                        Maintain and protect data and service settings.
                                    </td>
                                    <td>
                                        <ol>
                                            <li>"Customer solutions <strong>must be configured with</strong> redundant, high availability (HA) Firewalls and Load Balancers to be eligible for credits under this SLA."</li>
                                        </ol>
                                    </td>
                                </tr>
                                <tr class="">
                                    <td>
                                        Claim for non-compliance.
                                    </td>
                                    <td>
                                        <ol>
                                            <li>"In order to receive a credit under this SLA, Customer <strong>must</strong> first open a trouble ticket to report and request resolution to the incident."</li>
                                            <li>"Customer <strong>is not entitled to</strong> multiple Performance Credits even if multiple performance objectives are not met in a Calendar Month."</li>
                                        </ol>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <h4 className="my-3 pt-4">Customer rights</h4>

                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Concept</th>
                                    <th scope="col">Examples</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="">
                                    <td>
                                        Receive financial compensation.
                                    </td>
                                    <td>
                                        <ol>
                                            <li>"You <strong>will be eligible to</strong> receive a Service Credit as described below."</li>
                                            <li>"If during a WAF Period a Layer 7 DDoS attack (…) You <strong>may seek to</strong> receive WAF Service Credits in accordance with the following criteria."</li>
                                            <li>"You <strong>may submit</strong> a claim for WAF Service Credits either through the "My Oracle Support" portal or by contacting Your Oracle account manager."</li>
                                        </ol>
                                    </td>
                                </tr>
                                <tr class="">
                                    <td>
                                    Receive timely assistance.
                                    </td>
                                    <td>
                                        <ol>
                                            <li>"You <strong>may use</strong> Remote Monitoring Checks on any IP address (or related hostname) that you own, whether hosted by Rackspace or at another location."</li>
                                            <li>"You <strong>may configure</strong> Remote Monitoring Checks against dynamic IP addresses."</li>
                                            <li>"You <strong>are also entitled to have</strong> the goods repaired or replaced if goods fail to be of acceptable quality and the failure does not amount to a major failure"</li>
                                        </ol>
                                    </td>
                                </tr>
                                <tr class="">
                                    <td>
                                    Terminate subscription
                                    </td>
                                    <td>
                                        <ol>
                                            <li>"If you disagree with such revisions made by Tencent Cloud to this Agreement, you <strong>have the right to</strong> cease using the Service; by continuing to use the Service, you shall be deemed to have accepted the Agreement as amended."</li>
                                        </ol>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div >
                </div >
            </div >
        </div >
    );
}

export default Instructions;