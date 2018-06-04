import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { map } from 'lodash';

interface ISuccessViewProps {
    location: any,
    getSuccessDoc: any
    success: any
}

import * as actions from '../../actions';

class successView extends React.Component<ISuccessViewProps, {}> {
    constructor(props: any) {
        super(props);
        const params = new URLSearchParams(this.props.location.search);
        let id = params.get('id') || '';
        this.props.getSuccessDoc(id);
    }

    public viewTemplate(docData: JSX.Element): JSX.Element {
        return (
            <section className='bg-light' id='portfolio'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 text-center'>
                            <h2 className='section-heading text-uppercase'>Success View</h2>
                        </div>
                    </div>
                    {docData}
                </div>
            </section>
        );
    }

    public viewDataTemplate(doc: any) {
        let pic = doc.pic.split("?")[0] + "?raw=1";
        let vid = doc.vid.split("?")[0] + "?raw=1";
        return (
            <div className="col-lg-12 text-center">
                <h3 className="section-heading text-uppercase">{doc.businessName}</h3>
                <h4 className="section-heading text-uppercase">{doc.name}</h4>

                <div className={"ratio"} style={{ backgroundImage: `url(${pic})` }}>
                </div>
                <div>
                    <video width="320" height="240" controls>
                        <source src={`${vid}`} type="video/mp4" />
                        Your browser does not support the video tag.
		    </video>
                </div>
                <table className="table table-bordered">
                    <tbody>
                        {
                            map(doc, (k: any, v: any) => {
                                if (v !== null || v !== '_id' || v !== 'pic' || v !== 'vid' || v != '__v') {

                                    return (
                                        <tr>
                                            <td>{v}</td>
                                            <td>{k}</td>
                                        </tr>
                                    );
                                }
                            })
                        }
                    </tbody>
                </table>
                <div className="text-center" >Interview Done by : Microsmartware Pvt. Ltd’ s zTeam </div>
            </div>

        );
    }

    public renderView(): JSX.Element {
        let doc = this.props.success.successDoc;
        if (doc !== undefined && doc !== null) {
            return (
                this.viewTemplate(
                    <div className="row">
                        {this.viewDataTemplate(doc)}
                    </div>
                )
            );
        } else {
            return (
                <section className='bg-light' id='portfolio'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-12 text-center'>
                                <h2 className='section-heading text-uppercase'>Success View</h2>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-12 text-center'>
                                <h2 className='section-heading text-uppercase'>Loading</h2>
                            </div>
                        </div>
                    </div>
                </section>
            );
        }
    }

    public render(): JSX.Element {

        return (
            <div>
                {this.renderView()}
            </div>
        );
    }
}

const mapStateToProps = (state: any) => state;

export function mapDispatchToProps(dispatch: Dispatch<any>) {
    return {
        getSuccessDoc: (docID: string) => dispatch<any>(actions.getSuccessDoc(docID))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(successView);
