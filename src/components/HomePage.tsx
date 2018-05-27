/// <reference path="../types/index.d.ts" />
import * as React from 'react';

import Footer from './Footer';
import ContactForm from './ContactForm';
import Team from './Team';
import Services from './Services';
import ImageSlideShow from './ImageSlideShow';
import HomeImageSlideShow from './HomeImageSlideShow';
import AboutJourney from './AboutJourney';

import Timer from 'react-t-minus-timer';

interface IHomePageProps {
}

export default class HomePage extends React.Component<IHomePageProps, {}> {
    public render(): JSX.Element {
        return (
            <div>
		<Timer endTime={'2018-06-01T00:00:00.000+07:00'}/>
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

                    {/* Home Image Slide Show  */}
                    <HomeImageSlideShow />

                    {/*-- Clients */}
                    <section className="py-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3 col-sm-6">
                                    <a href="#">
                                        <img className="img-fluid d-block mx-auto" src="img/indianbank.png" alt="" />
                                    </a>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <a href="#">
                                        <img className="img-fluid d-block mx-auto" src="img/axis.png" alt="" />
                                    </a>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <a href="#">
                                        <img className="img-fluid d-block mx-auto" src="img//sbi.png" alt="" />
                                    </a>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <a href="#">
                                        <img className="img-fluid d-block mx-auto" src="img/andhrabank.png" alt="" />
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
