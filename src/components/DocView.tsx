import * as React from 'react';
import { connect, Dispatch } from 'react-redux';

import * as actions from '../actions';

import * as axios from 'axios';

interface IDocViewProps {
    doc: {
        data: any
    },
    getDoc: (docID: string) => any,
    match: {
        params: {
            id: string
        }
    },
    location: {
        search: string
    }
}

class DocView extends React.Component<IDocViewProps, {}> {
    constructor(props: any) {
        super(props);
        const params = new URLSearchParams(this.props.location.search)
        let id = params.get('id') || '';
        this.props.getDoc(id);
    }

    template(elem: JSX.Element): JSX.Element {
        return (
            <div className="container" style={{"margin-left": "30%", "margin-top": "20%"}}>
                <div className="row clearfix">
                    <div className="col-md-12 column">
                        <div className="col-md-6 col-md-offset-3 column">
                            {elem}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    standupIndiaTemplate(doc: any): JSX.Element {
        return (
            <div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Name of the Bank</td>
                            <td>{doc["Bank"]}</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Name of the Branch</td>
                            <td>{doc["Bank"]}</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Name of the Borrower</td>
                            <td>{doc["Bank"]}</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Name of the Business</td>
                            <td>{doc["Nature of Business Activity"]}</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Name of the Branch</td>
                            <td>{doc["Bank"]}</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Name of the Branch</td>
                            <td>{doc["Bank"]}</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Name of the Branch</td>
                            <td>{doc["Bank"]}</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Name of the Branch</td>
                            <td>{doc["Bank"]}</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Name of the Branch</td>
                            <td>{doc["Bank"]}</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Name of the Branch</td>
                            <td>{doc["Bank"]}</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Name of the Branch</td>
                            <td>{doc["Bank"]}</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Name of the Branch</td>
                            <td>{doc["Bank"]}</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Name of the Branch</td>
                            <td>{doc["Bank"]}</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Name of the Branch</td>
                            <td>{doc["Bank"]}</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Name of the Branch</td>
                            <td>{doc["Bank"]}</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Name of the Branch</td>
                            <td>{doc["Bank"]}</td>
                        </tr>
                        <tr>
                            <th scope="row">17</th>
                            <td>Number of people to whom employment has been provided</td>
                            <td>{doc["Expected Employment"]}</td>
                        </tr>
                        <tr>
                            <th scope="row" >19</th>
                            <td>Mobile No.</td>
                            <td>{doc["Mobile No"]}</td>
                        </tr>
                        <tr>
                           <th scope="row">20</th>
                           <td>E-mail</td>
                           <td>{doc["Email Id"]}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }


    showDoc(): JSX.Element {
        let doc = this.props.doc.data;

        if (doc !== undefined && doc !== null) {
            return (
                this.template(
                    <div>
                        {this.standupIndiaTemplate(doc[0])}
                        {JSON.stringify(doc)}
                    </div>
                )
            );
        }
        else {
            return (
                this.template(
                    <div>
                    Loading
                    </div>
                )
            );
        }
    }

    public render(): JSX.Element {
        return (
            <div>
            {this.showDoc()}
            </div>
        );
    }
}

const mapStateToProps = (state: any) => state;

export function mapDispatchToProps(dispatch: Dispatch<any>) {
    return {
        getDoc: (docID: string) => dispatch<any>(actions.getDoc(docID))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DocView);
