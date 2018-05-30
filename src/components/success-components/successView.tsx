import * as React from 'react';
import { connect, Dispatch } from 'react-redux';

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
        return (
            <div className="col-lg-12 text-center">
                <h3 className="section-heading text-uppercase">{doc.businessName}</h3>
                <h4 className="section-heading text-uppercase">{doc.name}</h4>

                <div className={"ratio"} style={{ backgroundImage: `url(${doc.pic.split("?")[0] + "?raw=1"})` }}>
                </div>
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
