import * as React from 'react';

import { connect, Dispatch } from 'react-redux';
import { map, compact } from 'lodash';

import * as actions from '../actions';

import * as axios from 'axios';

interface IImageSlideShowProps {
    successPics: {
        data: any
    },
    getSuccessPics: () => any,
}


class ImageSlideShow extends React.Component<IImageSlideShowProps, {}> {

    constructor(props: any) {
        super(props);
        this.props.getSuccessPics();
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
		<img className="d-block w-100" src={"img/success/" + img} alt={no + " slide"} />
            </div>
            
	);
    }

    renderPictures(): JSX.Element {
	const pics = this.props.successPics.data;
	if (pics !== undefined && pics !== null) {
            return (
		this.carouselTemplate(
		    <div className="carousel-inner" style={{width:'100% !important', height: '500px !important'}}>
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
			    <img className="d-block w-100" style={{height: '200px !important'}} src={"img/success/" + pic} />
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

	const pics = this.props.successPics.data;

	if (pics !== undefined && pics !== null) {
	    return (
		<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval="1500">
		    <div className="carousel-inner">
			{this.renderPictures2()}
		    </div>

		    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
			<span className="carousel-control-prev-icon" aria-hidden="true"></span>
			<span className="sr-only">Previous</span>
		    </a>
		    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
			<span className="carousel-control-next-icon" aria-hidden="true"></span>
			<span className="sr-only">Next</span>
		    </a>
		    
		</div>
	    );
	} else {
	    return (
		<div>
		    Loading
		</div>
	    );
	}

	
	/* return (
	   <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
	   <ol className="carousel-indicators">
	 *             <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
	 *             <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
	 *             <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
	   </ol>
	   <div className="carousel-inner" style={{width:'100% !important', height: '500px !important'}}>

	   
	 <div className="carousel-item active">
	   <img className="d-block w-100" src="img/success/2018-04-30-PHOTO-00000284.jpg" alt="First slide" />
	   </div>
	   <div className="carousel-item">
	   <img className="d-block w-100" src="img/success/2018-04-30-PHOTO-00000296.jpg" alt="Second slide" />
	   </div>
	   <div className="carousel-item">
	   <img className="d-block w-100" src="img/success/2018-04-30-PHOTO-00000287.jpg" alt="Third slide" />
	   </div>
	   <div className="carousel-item">
	   <img className="d-block w-100" src="img/success/IMG_038682.JPG" alt="Fourth slide" />
	   </div>
	   <div className="carousel-item">
	   <img className="d-block w-100" src="img/success/IMG_038682.JPG" alt="Fifth slide" />
	   </div>
	   <div className="carousel-item">
	   <img className="d-block w-100" src="img/success/IMG_035792.JPG" alt="Sixth slide" />
	   </div> }
    
	    </div>
	    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
		*             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
		*             <span className="sr-only">Previous</span>
	    </a>
	    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
		*             <span className="carousel-control-next-icon" aria-hidden="true"></span>
		*             <span className="sr-only">Next</span>
	    </a>
	    *     </div>
); */
    }
}

const mapStateToProps = (state: any) => state;

export function mapDispatchToProps(dispatch: Dispatch<any>) {
    return {
        getSuccessPics: () => dispatch<any>(actions.getSuccessPics())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageSlideShow);

