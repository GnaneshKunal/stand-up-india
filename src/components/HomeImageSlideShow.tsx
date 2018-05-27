import * as React from 'react';

import { connect, Dispatch } from 'react-redux';
import { map, compact } from 'lodash';

import * as actions from '../actions';

import * as axios from 'axios';

interface IHomeImageSlideShowProps {
    successPics: {
        data: any
    },
    getSuccessPics: () => any,
}


class HomeImageSlideShow extends React.Component<IHomeImageSlideShowProps, {}> {

    constructor(props: any) {
        super(props);
        /* this.props.getSuccessPics(); */
    }

    carouselTemplate(elem: JSX.Element): JSX.Element {
        return (
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>

                {elem}
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );
    }

    picTemplate(img: string, no: string): JSX.Element {
        return (
            <div className="carousel-item active">
                <img className="d-block w-100" src={img} alt={no + " slide"} />
            </div>

        );
    }

    renderPictures(): JSX.Element {
        const pics = this.props.successPics.data;
        if (pics !== undefined && pics !== null) {
            return (
                this.carouselTemplate(
                    <div className="carousel-inner" style={{ width: '100% !important', height: '500px !important' }}>
                        {
                            map(pics, (pic: string) => {
                                if (pic !== ".DS_Store")
                                    return this.picTemplate(pic, " ")
                            })
                        }
                    </div>
                )
            );
        }
        else {
            return (
                this.carouselTemplate(
                    <div>
                        Loading
                    </div>
                )
            );
        }
    }



    renderPictures2(): any {
        const pics = this.props.successPics.data;
        let flag = true;
        if (pics !== undefined && pics !== null) {
            return map(pics, (pic: string) => {
                if (pic !== ".DS_Store")
                    return (
                        <div className={"carousel-item " + (flag == true ? "active" : "")}>{flag = false}
                            <img className="d-block w-100" style={{ height: '200px !important' }} src={"img/success/" + pic} />
                        </div>
                    );
            })
        }
        else {
            return (
                <div>
                    {this.renderPictures2()}
                </div>
            );
        }
    }


    public render(): JSX.Element {

        return (
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner" style={{ width: '100% !important', height: '500px !important' }}>


                    <div className="container footer">
                        <div className="d-flex justify-content-between">
                            <div className="p-1">
                                <p></p>
                            </div>
                            <div className="p-1">
				<div className="carousel-item active thumb-post">
                                    <img className="d-block w-100" style={{ maxWidth: '800px', maxHeight: '800px' }} src="https://www.dropbox.com/s/no49nhzcgysvxsp/WhatsApp%20Image%202018-05-16%20at%2018.59.19.jpeg?raw=1" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" style={{ maxWidth: '800px', maxHeight: '800px' }} src="https://www.dropbox.com/s/fgzseap25mt7nl1/WhatsApp%20Image%202018-05-16%20at%2018.59.42.jpeg?raw=1" />
                                </div>
				<div className="carousel-item thumb-post">
                                    <img className="d-block w-100" style={{ maxWidth: '800px', maxHeight: '800px' }} src="https://www.dropbox.com/s/ulhkcivk7i808fz/meet.jpg?raw=1" />
                                </div>
				<div className="carousel-item thumb-post">
                                    <img className="d-block w-100" style={{ maxWidth: '800px', maxHeight: '800px' }} src="https://www.dropbox.com/s/lpmckpfdgy1oqui/rbi.jpg?raw=1" />
                                </div>
				
			    </div>
			    <div className="p-1">
			    </div>
                        </div>
		    </div>

                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
		    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
		    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
		    <span className="carousel-control-next-icon" aria-hidden="true"></span>
		    <span className="sr-only">Next</span>
                </a>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeImageSlideShow);

