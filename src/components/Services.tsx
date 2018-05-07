import * as React from 'react';

export default class Services extends React.Component<{}, {}> {
    public render(): JSX.Element {
        return (
            <section id="services">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Services</h2>
                            <h3 className="section-subheading text-muted">Stand-Up India Scheme for financing SC/ST and/or Women Entrepreneurs.</h3>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-md-4">
                            <span className="fa-stack fa-4x">
                                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                                <i className="fa fa-bank fa-stack-1x fa-inverse"></i>
                            </span>
                            <h4 className="service-heading">How to Start your Business</h4>
                            <p className="text-muted"></p>
                        </div>
                        <div className="col-md-4">
                            <span className="fa-stack fa-4x">
                                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                                <i className="fa fa-bar-chart fa-stack-1x fa-inverse"></i>
                            </span>
                            <h4 className="service-heading">How to run your Business</h4>
                            <p className="text-muted"></p>
                        </div>
                        <div className="col-md-4">
                            <span className="fa-stack fa-4x">
                                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                                <i className="fa fa-money fa-stack-1x fa-inverse"></i>
                            </span>
                            <h4 className="service-heading">How to grow your Business</h4>
                            <p className="text-muted"></p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
