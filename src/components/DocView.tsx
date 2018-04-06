import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { map } from 'lodash';

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

    makeHeader(): JSX.Element {
        return (
            <div>
                <center>
                    <h1>Chittoor District Andhra Pradesh</h1>
                    <hr />
                </center>
            </div>
        );
    }

    standupIndiaTemplate(doc: any): JSX.Element {

        return (
            <div>
                {this.makeHeader()}
                <center> PRAHARI INDUSTRIES Success Story </center>
                <br />
                <table className="table table-bordered">
                    <tbody>
                        {
                            map(doc, (k: any, v: any) => {
                                if (k !== null) {
                                    let value = k.toString();
                                    if (value.includes("OF")) {
                                        let vConv = value.indexOf("/", 10);
                                        let vNew = value.slice(vConv + 1);
                                        value = "SUICTRMSPL" + vNew;
                                    }
                                    return (
                                        <tr>
                                            <td>{v.toString()}</td>
                                            <td>{value}</td>
                                        </tr>
                                        );
                                }
                            })
                        }
                    </tbody>
                </table>
                <center>Interview Done by : Microsmartware Pvt. Ltd’ s zTeam </center>
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
