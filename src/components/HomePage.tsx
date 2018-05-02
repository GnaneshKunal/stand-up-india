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
                                <div className="intro-heading text-uppercase"><span>Comming Soon</span></div>
                                <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Comming Soon</a>
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
                                        <img className="img-fluid d-block mx-auto" src="img/logos/envato.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <a href="#">
                                        <img className="img-fluid d-block mx-auto" src="img/logos/designmodo.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <a href="#">
                                        <img className="img-fluid d-block mx-auto" src="img/logos/themeforest.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <a href="#">
                                        <img className="img-fluid d-block mx-auto" src="img/logos/creative-market.jpg" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Contact */}
                    <ContactForm />

                    {/* Footer */}
                    <Footer />

                    {/*Portfolio Modals */}

                    {/* Modal 1 */}
                    <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex={-1} role="dialog" aria-hidden="true">
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
                                                {/*-- Project Details Go Here */}
                                                <h2 className="text-uppercase">Project Name</h2>
                                                <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                                <img className="img-fluid d-block mx-auto" src="img/portfolio/01-full.jpg" alt="" />
                                                <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                                <ul className="list-inline">
                                                    <li>Date: January 2017</li>
                                                    <li>Client: Threads</li>
                                                    <li>Category: Illustration</li>
                                                </ul>
                                                <button className="btn btn-primary" data-dismiss="modal" type="button">
                                                    <i className="fa fa-times"></i>
                                                    Close Project</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Modal 2 */}
                    <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex={-1} role="dialog" aria-hidden="true">
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
                                                {/* Project Details Go Here */}
                                                <h2 className="text-uppercase">Project Name</h2>
                                                <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                                <img className="img-fluid d-block mx-auto" src="img/portfolio/02-full.jpg" alt="" />
                                                <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                                <ul className="list-inline">
                                                    <li>Date: January 2017</li>
                                                    <li>Client: Explore</li>
                                                    <li>Category: Graphic Design</li>
                                                </ul>
                                                <button className="btn btn-primary" data-dismiss="modal" type="button">
                                                    <i className="fa fa-times"></i>
                                                    Close Project</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Modal 3*/}
                    <div className="portfolio-modal modal fade" id="portfolioModal3" tabIndex={-1} role="dialog" aria-hidden="true">
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
                                                {/* Project Details Go Here */}
                                                <h2 className="text-uppercase">Project Name</h2>
                                                <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                                <img className="img-fluid d-block mx-auto" src="img/portfolio/03-full.jpg" alt="" />
                                                <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                                <ul className="list-inline">
                                                    <li>Date: January 2017</li>
                                                    <li>Client: Finish</li>
                                                    <li>Category: Identity</li>
                                                </ul>
                                                <button className="btn btn-primary" data-dismiss="modal" type="button">
                                                    <i className="fa fa-times"></i>
                                                    Close Project</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Modal 4 */}
                    <div className="portfolio-modal modal fade" id="portfolioModal4" tabIndex={-1} role="dialog" aria-hidden="true">
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
                                                {/* Project Details Go Here */}
                                                <h2 className="text-uppercase">Project Name</h2>
                                                <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                                <img className="img-fluid d-block mx-auto" src="img/portfolio/04-full.jpg" alt="" />
                                                <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                                <ul className="list-inline">
                                                    <li>Date: January 2017</li>
                                                    <li>Client: Lines</li>
                                                    <li>Category: Branding</li>
                                                </ul>
                                                <button className="btn btn-primary" data-dismiss="modal" type="button">
                                                    <i className="fa fa-times"></i>
                                                    Close Project</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Modal 5 */}
                    <div className="portfolio-modal modal fade" id="portfolioModal5" tabIndex={-1} role="dialog" aria-hidden="true">
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
                                                {/* Project Details Go Here */}
                                                <h2 className="text-uppercase">Project Name</h2>
                                                <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                                <img className="img-fluid d-block mx-auto" src="img/portfolio/05-full.jpg" alt="" />
                                                <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                                <ul className="list-inline">
                                                    <li>Date: January 2017</li>
                                                    <li>Client: Southwest</li>
                                                    <li>Category: Website Design</li>
                                                </ul>
                                                <button className="btn btn-primary" data-dismiss="modal" type="button">
                                                    <i className="fa fa-times"></i>
                                                    Close Project</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Modal 6 */}
                    <div className="portfolio-modal modal fade" id="portfolioModal6" tabIndex={-1} role="dialog" aria-hidden="true">
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
                                                {/* Project Details Go Here */}
                                                <h2 className="text-uppercase">Project Name</h2>
                                                <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                                <img className="img-fluid d-block mx-auto" src="img/portfolio/06-full.jpg" alt="" />
                                                <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                                <ul className="list-inline">
                                                    <li>Date: January 2017</li>
                                                    <li>Client: Window</li>
                                                    <li>Category: Photography</li>
                                                </ul>
                                                <button className="btn btn-primary" data-dismiss="modal" type="button">
                                                    <i className="fa fa-times"></i>
                                                    Close Project</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>);
    }
}
