import * as React from 'react';

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

                    <section id="services">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <h2 className="section-heading text-uppercase">Services</h2>
                                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                                </div>
                            </div>
                            <div className="row text-center">
                                <div className="col-md-4">
                                    <span className="fa-stack fa-4x">
                                        <i className="fa fa-circle fa-stack-2x text-primary"></i>
                                        <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
                                    </span>
                                    <h4 className="service-heading">E-Commerce</h4>
                                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                                </div>
                                <div className="col-md-4">
                                    <span className="fa-stack fa-4x">
                                        <i className="fa fa-circle fa-stack-2x text-primary"></i>
                                        <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
                                    </span>
                                    <h4 className="service-heading">Responsive Design</h4>
                                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                                </div>
                                <div className="col-md-4">
                                    <span className="fa-stack fa-4x">
                                        <i className="fa fa-circle fa-stack-2x text-primary"></i>
                                        <i className="fa fa-lock fa-stack-1x fa-inverse"></i>
                                    </span>
                                    <h4 className="service-heading">Web Security</h4>
                                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* carousel */}

                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src="img/success/2018-04-30-PHOTO-00000284.jpg" style={{ height: 800 }} alt="First slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="img/success/2018-04-30-PHOTO-00000287.jpg" style={{ height: 800 }} alt="Second slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="img/success/2018-04-30-PHOTO-00000288.jpg" style={{ height: 800 }} alt="Third slide" />
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

                    {/* About */}
                    <section id="about">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <h2 className="section-heading text-uppercase">About</h2>
                                    <h3 className="section-subheading text-muted">Our Journey</h3>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <ul className="timeline">
                                        <li>
                                            <div className="timeline-image">
                                                <img className="rounded-circle img-fluid" src="img/about/1.jpg" alt="" />
                                            </div>
                                            <div className="timeline-panel">
                                                <div className="timeline-heading">
                                                    <h4>2009-2011</h4>
                                                    <h4 className="subheading">Our Humble Beginnings</h4>
                                                </div>
                                                <div className="timeline-body">
                                                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="timeline-inverted">
                                            <div className="timeline-image">
                                                <img className="rounded-circle img-fluid" src="img/about/2.jpg" alt="" />
                                            </div>
                                            <div className="timeline-panel">
                                                <div className="timeline-heading">
                                                    <h4>March 2011</h4>
                                                    <h4 className="subheading">An Agency is Born</h4>
                                                </div>
                                                <div className="timeline-body">
                                                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="timeline-image">
                                                <img className="rounded-circle img-fluid" src="img/about/3.jpg" alt="" />
                                            </div>
                                            <div className="timeline-panel">
                                                <div className="timeline-heading">
                                                    <h4>December 2012</h4>
                                                    <h4 className="subheading">Transition to Full Service</h4>
                                                </div>
                                                <div className="timeline-body">
                                                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="timeline-inverted">
                                            <div className="timeline-image">
                                                <img className="rounded-circle img-fluid" src="img/about/4.jpg" alt="" />
                                            </div>
                                            <div className="timeline-panel">
                                                <div className="timeline-heading">
                                                    <h4>July 2014</h4>
                                                    <h4 className="subheading">Phase Two Expansion</h4>
                                                </div>
                                                <div className="timeline-body">
                                                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="timeline-inverted">
                                            <div className="timeline-image">
                                                <h4>Be Part
						    <br />Of Our
						    <br />Story!</h4>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Team */}
                    <section className="bg-light" id="team">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                                    <h3 className="section-subheading text-muted">Something about the tea</h3>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="team-member">
                                        <img className="mx-auto rounded-circle" src="img/team/1.jpg" alt="" />
                                        <h4>Kay Garland</h4>
                                        <p className="text-muted">Lead Designer</p>
                                        <ul className="list-inline social-buttons">
                                            <li className="list-inline-item">
                                                <a href="#">
                                                    <i className="fa fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href="#">
                                                    <i className="fa fa-facebook"></i>
                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href="#">
                                                    <i className="fa fa-linkedin"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="team-member">
                                        <img className="mx-auto rounded-circle" src="img/team/2.jpg" alt="" />
                                        <h4>David Brainard</h4>
                                        <p className="text-muted">Lead Marketer</p>
                                        <ul className="list-inline social-buttons">
                                            <li className="list-inline-item">
                                                <a href="#">
                                                    <i className="fa fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href="#">
                                                    <i className="fa fa-facebook"></i>
                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href="#">
                                                    <i className="fa fa-linkedin"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="team-member">
                                        <img className="mx-auto rounded-circle" src="img/team/3.jpg" alt="" />
                                        <h4>Diana Pertersen</h4>
                                        <p className="text-muted">Lead Developer</p>
                                        <ul className="list-inline social-buttons">
                                            <li className="list-inline-item">
                                                <a href="#">
                                                    <i className="fa fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href="#">
                                                    <i className="fa fa-facebook"></i>
                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href="#">
                                                    <i className="fa fa-linkedin"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-8 mx-auto text-center">
                                    <p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
                                </div>
                            </div>
                        </div>
                    </section>

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
                                    <form id="contactForm" name="sentMessage">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input className="form-control" id="name" type="text" placeholder="Your Name *" required data-validation-required-message="Please enter your name." />
                                                    <p className="help-block text-danger"></p>
                                                </div>
                                                <div className="form-group">
                                                    <input className="form-control" id="email" type="email" placeholder="Your Email *" required data-validation-required-message="Please enter your email address." />
                                                    <p className="help-block text-danger"></p>
                                                </div>
                                                <div className="form-group">
                                                    <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required data-validation-required-message="Please enter your phone number." />
                                                    <p className="help-block text-danger"></p>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <textarea className="form-control" id="message" placeholder="Your Message *" required data-validation-required-message="Please enter a message."></textarea>
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

                    {/* Footer */}
                    <footer>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <span className="copyright">Copyright &copy; Your Website 2018</span>
                                </div>
                                <div className="col-md-4">
                                    <ul className="list-inline social-buttons">
                                        <li className="list-inline-item">
                                            <a href="#">
                                                <i className="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#">
                                                <i className="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#">
                                                <i className="fa fa-linkedin"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-4">
                                    <ul className="list-inline quicklinks">
                                        <li className="list-inline-item">
                                            <a href="#">Privacy Policy</a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#">Terms of Use</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </footer>
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
