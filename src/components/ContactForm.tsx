import * as React from 'react';

interface IContactFormState {
    name: string,
    phone: string,
    email: string,
    message: string
}

export default class ContactForm extends React.Component<{}, IContactFormState> {

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
        console.log(this.state);
    }

    public render(): JSX.Element {
        return (
            <section id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Contact Us</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <form id="contactForm" name="sentMessage" onSubmit={this.onFormSubmit.bind(this)}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input className="form-control" id="name" name="name" type="text" placeholder="Your Name *" required data-validation-required-message="Please enter your name."
                                                value={this.state.name}
                                                onChange={event => {
                                                    this.setState({ name: event.target.value })
                                                }}
                                            />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control" id="email" type="email" name="email" placeholder="Your Email *" required data-validation-required-message="Please enter your email address."
                                                value={this.state.email}
                                                onChange={event => {
                                                    this.setState({ email: event.target.value })
                                                }}
                                            />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control" id="phone" name="phone" type="tel" placeholder="Your Phone *" required data-validation-required-message="Please enter your phone number."
                                                value={this.state.phone}
                                                onChange={event => {
                                                    this.setState({ phone: event.target.value })
                                                }}

                                            />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <textarea className="form-control" name="message" id="message" placeholder="Your Message *" required data-validation-required-message="Please enter a message."
                                                value={this.state.message}
                                                onChange={event => {
                                                    this.setState({ message: event.target.value })
                                                }}
                                            ></textarea>
                                            <p className="help-block text-danger"></p>
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
