import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { map } from 'lodash';

import * as actions from '../../actions';

interface ISuccessListProps {
    getSuccessList: () => any
    success: any
}

class successList extends React.Component<ISuccessListProps, {}> {
    constructor(props: any) {
        super(props);
        this.props.getSuccessList();
    }

    public listTemplate(listData: JSX.Element): JSX.Element {
        return (
            <section className='bg-light' id='success_list'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase"> Success List</h2>
                        </div>
                    </div>
                    {listData}
                </div>
            </section>
        );
    };

    public listDataTemplate(doc: any): JSX.Element {
        let img = doc.pic.split("?")[0] + "?raw=1"
        return (
            <div className="col-lg-6 col-md-6 col-xs-6">
                <a href={`/success-doc?id=${doc._id}`} className="d-block mb-4 h-100">
                    <div className="card" style={{ width: '18rem' }}>
                        <div className="ratio card-img-top" style={{ backgroundImage: `url(${img})` }}></div>
                        <div className="card-body">
                            <h5 className="card-title">{doc.businessName}</h5>
                            <p className="card-text">{doc.name}</p>
                            <a href="#" className="btn btn-primary">Go</a>
                        </div>
                    </div>
                </a>
            </div>
        );
    }

    public listRender(): JSX.Element {
        let docs = this.props.success.successList;
        if (docs !== undefined && docs !== null && docs.length !== 0) {
            return (
                this.listTemplate(
                    <div className='row text-center text-lg-left'>
                        {
                            map(docs, (doc: any) => {
                                return (
                                    this.listDataTemplate(doc)
                                );
                            })
                        }
                    </div>
                )
            );
        } else if (docs != undefined && docs != null && docs.length === 0) {
            return (
                <section className='bg-light' id='listDocs'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-12 text-center'>
                                <h2 className='section-heading text-uppercase'>Success List</h2>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-12 text-center'>
                                <h2 className='section-heading text-uppercase'>No Submission Yet.</h2>
                            </div>
                        </div>
                    </div>
                </section>
            );
        } else {
            return (
                <section className='bg-light' id='listDocs'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-12 text-center'>
                                <h2 className='section-heading text-uppercase'>Success List</h2>
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
                {this.listRender()}
            </div>
        );
    }

}

const mapStateToProps = (state: any) => state;

export function mapDispatchToProps(dispatch: Dispatch<any>) {
    return {
        getSuccessList: () => dispatch<any>(actions.getSuccessList())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(successList);
