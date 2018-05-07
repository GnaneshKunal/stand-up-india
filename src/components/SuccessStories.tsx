import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { map } from 'lodash';

import * as actions from '../actions';

import * as axios from 'axios';

interface ISuccessStoriesProps {
    successPics: {
        data: any
    },
    getSuccessPics: () => any,
}

class SuccessStories extends React.Component<ISuccessStoriesProps, {}> {

    constructor(props: any) {
        super(props);
        this.props.getSuccessPics();
    }

    template(picData: JSX.Element): JSX.Element {
        return (
            <section className="bg-light" id="portfolio">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Success Stories</h2>
                            {/* <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3> */}
                        </div>
                    </div>
                    {picData}
                </div>
            </section>
        );
    }

    picTemplate(img: string/* , name: string, short: string */): JSX.Element {
        return (
            <div className="col-md-4 col-sm-6 portfolio-item">
                <a className="portfolio-link" data-toggle="modal" href={'#' + img}>
                    <div className="portfolio-hover">
                        <div className="portfolio-hover-content">
                            <i className="fa fa-plus fa-3x"></i>
                        </div>
                    </div>
                    <img className="img-fluid" src={img} alt="" />
                </a>
                {/* <div className="portfolio-caption">
                    <h4>{name}</h4>
                    <p className="text-muted">{short}</p>
                    </div> */}
            </div>
        );
    }

    renderPics(): JSX.Element {
        let pics = this.props.successPics.data;
        if (pics !== undefined && pics !== null) {
            return (
                this.template(
                    <div className="row">
                        {map(pics, (pic: string) => {
                            if (pic !== ".DS_Store")
                                return (
                                    this.picTemplate(pic/* , "name", "short" */)
                                );
                        })}
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

    renderModals(): JSX.Element {
        let pics = this.props.successPics.data;
        if (pics !== undefined && pics !== null) {
            return (
                <div>
                    {
                        map(pics, (pic: string) => {
                            if (pic !== ".DS_Store")
                                return (
                                    this.modalTemplate(/* "name", "short desc", "long desc", */ pic/* , "January 2017", "client", "category" */)
                                );
                        })
                    }
                </div>
            );
        } else {
            return (
                <div>
                    Loading
		</div>
            );
        }
    }

    modalTemplate(/* name: string, short: string, long: string,  */img: string/* , Date: string, client: string, category: string */): JSX.Element {
        return (
            <div className="portfolio-modal modal fade" id={img} tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="close-modal" data-dismiss="modal">
                            <div className="lr">
                                <div className="rl"></div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 mx-auto">
                                    <div className="modal-body">
                                        {/* <h2 className="text-uppercase">{name}</h2>
                                            <p className="item-intro text-muted">{short}</p> */}
                                        <img className="img-fluid d-block mx-auto" src={img} alt="" />
                                        {/* <p>{long}</p>
                                            <ul className="list-inline">
                                            <li>Date: {date}</li>
                                            <li>Client: {client}</li>
                                            <li>Category: {category}</li>
                                            </ul> */}
                                        <button className="btn btn-primary" data-dismiss="modal" type="button">
                                            <i className="fa fa-times"></i>
                                            Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    public render(): JSX.Element {
        console.log(this.props);
        return (
            <div>
                {/*Portfolio Grid*/}
                {this.renderPics()}
                {this.renderModals()}
            </div>
        );
    }
}


const mapStateToProps = (state: any) => state;

export function mapDispatchToProps(dispatch: Dispatch<any>) {
    return {
        getSuccessPics: () => dispatch<any>(actions.getSuccessPics())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SuccessStories);
