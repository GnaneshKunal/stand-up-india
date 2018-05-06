import * as React from 'react';

import Footer from './Footer';
import ContactForm from './ContactForm';
import Team from './Team';
import Services from './Services';
import ImageSlideShow from './ImageSlideShow';
import AboutJourney from './AboutJourney';

interface IHomePageProps {
}

export default class HomePage extends React.Component<IHomePageProps, {}> {
    public render(): JSX.Element {
        return (
            <div>
                <div id="page-top">
                    {/* Header */}

                    <header className="masthead">
                        <div className="container">
                            <div className="intro-text">
                                <div className="intro-lead-in"><span>Welcome To StandUp India Loans!</span></div>
                                {/* <div className="intro-heading text-uppercase"><span>Stand-Up India Scheme for financing SC/ST and/or Women Entrepreneurs.</span></div> */}
                                <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Contact: 9440931705 (AD Brainard)</a>
                            </div>
                        </div>
                    </header>

                    {/*services*/}
                    <Services />

                    {/* carousel */}
                    <ImageSlideShow />

                    {/* About */}
                    <AboutJourney />

                    {/* Team */}
                    <Team />

                    {/*-- Clients */}
                    <section className="py-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3 col-sm-6">
                                    <a href="#">
                                        <img className="img-fluid d-block mx-auto" src="img/logos/indianbank.png" alt="" />
                                    </a>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <a href="#">
                                        <img className="img-fluid d-block mx-auto" src="img/logos/axis.png" alt="" />
                                    </a>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <a href="#">
                                        <img className="img-fluid d-block mx-auto" src="img/logos/sbi.png" alt="" />
                                    </a>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <a href="#">
                                        <img className="img-fluid d-block mx-auto" src="img/logos/andhrabank.png" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Contact */}
                    <ContactForm />

                    {/* Footer */}
                    <Footer />

                </div>
            </div>);
    }
}
