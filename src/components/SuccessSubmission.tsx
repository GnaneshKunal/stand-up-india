import * as React from 'react';
import { connect, Dispatch } from 'react-redux';

import * as actions from '../actions';

interface IContactFormProps {
    sendFormDetails: (details: Idetails) => any
}

interface IContactFormState {
    name: string,
    phone: string,
    email: string,
    message: string
}

interface Idetails {
    name: string;
    email: string;
    phone: string;
    message: string;
}

class ContactForm extends React.Component<IContactFormProps, IContactFormState> {

    constructor(props: any) {
        super(props);

        this.state = {
            name: '',
            phone: '',
            email: '',
            message: ''
        };

    }

    onFormSubmit(event: any) {
        event.preventDefault();
        this.props.sendFormDetails(this.state);
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
                            <form id="contactForm" name="sentMessage" onSubmit={this.onFormSubmit.bind(this)}>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <input className="form-control" id="name" name="name" type="text" placeholder="Your Name *" required data-validation-required-message="Please enter Entrepreneur's name."
                                                   value={this.state.name}
                                                   onChange={event => {
							   this.setState({ name: event.target.value })
                                                   }}
                                            />
                                            <p className="help-block text-danger"></p>
                                        </div>
					<div className="form-group">
                                            <input className="form-control" id="phone" name="phone" type="tel" placeholder="Your Business name"

                                            />
                                            <p className="help-block text-danger"></p>
                                        </div>
					
					<div className="form-group">
					    <label>Nature of Business</label>
					    <select className="form-control" id="exampleFormControlSelect1">
						<option selected>Select your business Nature</option>
						<option>Manufacturing</option>
						<option>Services</option>
						<option>Trading</option>
					    </select>
					</div>
					<div className="form-group" >
					    <label> <span style={{color: "white"}}>First time entrepreneur?</span></label>
					    <div className="form-check">
						<input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
						<label className="form-check-label">
						    <span style={{color: "white"}}> Yes</span>
						</label>
					    </div>
					    <div className="form-check">
						<input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
						<label className="form-check-label">
						    <span style={{color: "white"}}> No</span>
						</label>
					    </div>
					</div>
					<div className="form-group">
                                            <input className="form-control" id="phone" name="phone" type="tel" placeholder="Location of Business Activity" required data-validation-required-message="Please enter your phone number."
                                                   value={this.state.phone}
                                                   onChange={event => {
							   this.setState({ phone: event.target.value })
                                                   }}

                                            />
                                            <p className="help-block text-danger"></p>
                                        </div>
					<div className="form-group">
                                            <input className="form-control" id="phone" name="phone" type="tel" placeholder="City/Town/Village" required data-validation-required-message="Please enter your phone number."
                                                   value={this.state.phone}
                                                   onChange={event => {
							   this.setState({ phone: event.target.value })
                                                   }}

                                            />
                                            <p className="help-block text-danger"></p>
                                        </div>
					<div className="form-group">
                                            <input className="form-control" id="phone" name="phone" type="tel" placeholder="PINCODE" required data-validation-required-message="Please enter your phone number."
                                                   value={this.state.phone}
                                                   onChange={event => {
							   this.setState({ phone: event.target.value })
                                                   }}

                                            />
                                            <p className="help-block text-danger"></p>
                                        </div>
					<div className="form-group">
                                            <input className="form-control" id="phone" name="phone" type="tel" placeholder="Distict" required data-validation-required-message="Please enter your phone number."
                                                   value={this.state.phone}
                                                   onChange={event => {
							   this.setState({ phone: event.target.value })
                                                   }}

                                            />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control" id="email" type="email" name="email" placeholder="State" required data-validation-required-message="Please enter your email address."
                                                   value={this.state.email}
                                                   onChange={event => {
							   this.setState({ email: event.target.value })
                                                   }}
                                            />
                                            <p className="help-block text-danger"></p>
                                        </div>
					<div className="form-group">
					    <label><span style={{color: "white"}}>Select Bank</span></label>
					    <select className="form-control" id="exampleFormControlSelect1">
						<option>State Bank of India</option>
						<option>Axis Bank</option>
						<option>Indian Bank</option>
						<option>Andhra bank</option>
						<option>Bank</option>
					    </select>
					</div>
					
                                        <div className="form-group">
                                            <input className="form-control" id="phone" name="phone" type="tel" placeholder="Year of Launch" required data-validation-required-message="Please enter your phone number."

                                            />
                                            <p className="help-block text-danger"></p>
                                        </div>
					<div className="form-group">
                                            <input className="form-control" id="phone" name="phone" type="tel" placeholder="Bank Name" required data-validation-required-message="Please enter your phone number."
                                            />
                                            <p className="help-block text-danger"></p>
                                        </div>
					<div className="form-group">
                                            <input className="form-control" id="phone" name="phone" type="tel" placeholder="Loan sanctioned" required data-validation-required-message="Please enter your phone number."
                                            />
                                            <p className="help-block text-danger"></p>
                                        </div>
					<div className="form-group">
					    <textarea className="form-control" name="message" id="message" placeholder="Brief about your success story" required data-validation-required-message="Please enter a message."></textarea>
					</div>
					
					<div className="form-group">
					    <label ><span style={{color: "white"}}>Upload Photo</span></label>
					    <input type="file" className="form-control-file" id="exampleFormControlFile1" />
					</div>
					
					<div className="form-group">
					    <label><span style={{color: "white"}}>Upload Video</span></label>
						<input type="file" className="form-control-file" id="exampleFormControlFile1" />
					</div>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="col-lg-12 text-center">
                                        <div id="success"></div>
                                        <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state: any) => state;

export function mapDispatchToProps(dispatch: Dispatch<any>) {
    return {
        sendFormDetails: (details: Idetails) => dispatch<any>(actions.sendFormDetails(details))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
