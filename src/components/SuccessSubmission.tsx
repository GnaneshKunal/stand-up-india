import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import Dropzone from 'react-dropzone';

import * as actions from '../actions';

import axios from 'axios';

interface ISuccessSubmissionProps {
    submitSuccessForm: (details: any) => any,
    successSubmit: any
}

interface ISuccessSubmissionState {
    name: string,
    businessName: string,
    phone: string,
    email: string,
    message: string,
    pic: any,
    vid: any,
    businessNature: string,
    firstTime: string,
    location: string,
    place: string,
    pincode: string,
    district: string,
    state: string,
    bank: string,
    year: string,
    loan: string,
    brief: string
}

interface Idetails {
    name: string;
    email: string;
    phone: string;
    message: string;
}

class SuccessSubmission extends React.Component<ISuccessSubmissionProps, ISuccessSubmissionState> {

    constructor(props: any) {
        super(props);

        this.state = {
            name: '',
            businessName: '',
            phone: '',
            email: '',
            message: '',
            pic: '',
            vid: '',
            businessNature: '',
            firstTime: '',
            location: '',
            place: '',
            pincode: '',
            district: '',
            state: '',
            bank: '',
            year: '',
            loan: '',
            brief: ''
        };

    }

    public onImageChange(event: any) {
        this.setState({ pic: event.target.files[0] });
    }

    public onFormSubmit(event: any) {
        event.preventDefault();
        this.props.submitSuccessForm(this.state);
    }

    public onVideoChange(event: any) {
        this.setState({ vid: event.target.files[0] })
    }

    public generateForm(): JSX.Element {
	let msg = this.props.successSubmit.data;
        if (msg !== undefined && msg !== null) {
	    return (
		<div className="text-center text-white">Form Submitted Successfully </div>
	    );
	} else {
	    return (
		<form id="contactForm" name="sentMessage" onSubmit={this.onFormSubmit.bind(this)}>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <input className="form-control" id="name" name="name" type="text" placeholder="Your Name *"
                                       value={this.state.name}
                                       onChange={event => {
					       this.setState({ name: event.target.value })
                                       }}
                                />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="form-group">
                                <input className="form-control" id="bname" name="bname" type="text" placeholder="Your Business name"
                                       value={this.state.businessName}
                                       onChange={event => {
					       this.setState({ businessName: event.target.value })
                                       }}
                                />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="form-group">
                                <input className="form-control" id="mobile" name="mobile" type="tel" placeholder="Mobile No."
                                       value={this.state.phone}
                                       onChange={event => {
					       this.setState({ phone: event.target.value })
                                       }}
                                />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="form-group">
                                <input className="form-control" id="nature" name="nature" type="text" placeholder="Nature of Business"
                                       value={this.state.businessNature}
                                       onChange={event => {
					       this.setState({ businessNature: event.target.value })
                                       }}
                                />
                                <p className="help-block text-danger"></p>
                            </div>

                            <div className="form-group">
                                <input className="form-control" id="firsttime" name="firsttime" type="text" placeholder="First Time (Yes/No)"
                                       value={this.state.firstTime}
                                       onChange={event => {
					       this.setState({ firstTime: event.target.value })
                                       }}
                                />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="form-group">
                                <input className="form-control" id="location" name="location" type="text" placeholder="Location of Business Activity"
                                       value={this.state.location}
                                       onChange={event => {
					       this.setState({ location: event.target.value })
                                       }}

                                />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="form-group">
                                <input className="form-control" id="place" name="place" placeholder="City/Town/Village" type="text"
                                       value={this.state.place}
                                       onChange={event => {
					       this.setState({ place: event.target.value })
                                       }}

                                />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="form-group">
                                <input className="form-control" id="pincode" name="pincode" type="text" placeholder="PINCODE"
                                       value={this.state.pincode}
                                       onChange={event => {
					       this.setState({ pincode: event.target.value })
                                       }}

                                />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="form-group">
                                <input className="form-control" id="district" name="district" type="text" placeholder="District"
                                       value={this.state.district}
                                       onChange={event => {
					       this.setState({ district: event.target.value })
                                       }}

                                />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="form-group">
                                <input className="form-control" id="state" type="text" name="state" placeholder="State"
                                       value={this.state.state}
                                       onChange={event => {
					       this.setState({ state: event.target.value })
                                       }}
                                />
                                <p className="help-block text-danger"></p>
                            </div>

                            <div className="form-group">
                                <input className="form-control" id="bank" type="text" name="bank" placeholder="Bank Name"
                                       value={this.state.bank}
                                       onChange={event => {
					       this.setState({ bank: event.target.value })
                                       }}
                                />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="form-group">
                                <input className="form-control" id="year" name="year" type="text" placeholder="Year of Launch"
                                       value={this.state.year}
                                       onChange={event => {
					       this.setState({ year: event.target.value })
                                       }}
                                />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="form-group">
                                <input className="form-control" id="loan" name="loan" type="text" placeholder="Loan sanctioned"
                                       value={this.state.loan}
                                       onChange={event => {
					       this.setState({ loan: event.target.value })
                                       }}
                                />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" name="message" id="message" placeholder="Brief about your success story"
                                          value={this.state.brief}
                                          onChange={event => {
						  this.setState({ brief: event.target.value })
                                          }}
                                ></textarea>
                            </div>

                            <div className="form-group">
                                <label ><span style={{ color: "white" }}>Upload Photo</span></label>
                                <input type="file" required
                                       onChange={this.onImageChange.bind(this)}
                                       className="form-control-file" id="exampleFormControlFile1" />
                            </div>

                            <div className="form-group">
                                <label><span style={{ color: "white" }}>Upload Video</span></label>
                                <input
                                    required
                                    onChange={this.onVideoChange.bind(this)}
                                    type="file" className="form-control-file" id="exampleFormControlFile1" />
                            </div>
                        </div>
                        <div className="clearfix"></div>
                        <div className="col-lg-12 text-center">
                            <div id="success"></div>
                            <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">SUBMIT</button>
                        </div>
                    </div>
                </form>
	    );
	}

    }
    
    public render(): JSX.Element {
        return (
            <section id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Success Story</h2>
                            <h3 className="section-subheading text-muted">Tell us your story.</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            {this.generateForm()}
                        </div>
                    </div>
                </div>
            </section >
        );
    }
}

const mapStateToProps = (state: any) => state;

export function mapDispatchToProps(dispatch: Dispatch<any>) {
    return {
        submitSuccessForm: (details: any) => dispatch<any>(actions.submitSuccessForm(details))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SuccessSubmission);
