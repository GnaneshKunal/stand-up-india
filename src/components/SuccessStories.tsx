import * as React from 'react';


export default class SuccessStores extends React.Component<{}, {}> {
    public render(): JSX.Element {
        return (
            <div>

                {/*Portfolio Grid*/}
                <section className="bg-light" id="portfolio">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="section-heading text-uppercase">Success Stories</h2>
                                <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 col-sm-6 portfolio-item">
                                <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                                    <div className="portfolio-hover">
                                        <div className="portfolio-hover-content">
                                            <i className="fa fa-plus fa-3x"></i>
                                        </div>
                                    </div>
                                    <img className="img-fluid" src="img/portfolio/01-thumbnail.jpg" alt="" />
                                </a>
                                <div className="portfolio-caption">
                                    <h4>Threads</h4>
                                    <p className="text-muted">Illustration</p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 portfolio-item">
                                <a className="portfolio-link" data-toggle="modal" href="#portfolioModal2">
                                    <div className="portfolio-hover">
                                        <div className="portfolio-hover-content">
                                            <i className="fa fa-plus fa-3x"></i>
                                        </div>
                                    </div>
                                    <img className="img-fluid" src="img/portfolio/02-thumbnail.jpg" alt="" />
                                </a>
                                <div className="portfolio-caption">
                                    <h4>Explore</h4>
                                    <p className="text-muted">Graphic Design</p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 portfolio-item">
                                <a className="portfolio-link" data-toggle="modal" href="#portfolioModal3">
                                    <div className="portfolio-hover">
                                        <div className="portfolio-hover-content">
                                            <i className="fa fa-plus fa-3x"></i>
                                        </div>
                                    </div>
                                    <img className="img-fluid" src="img/portfolio/03-thumbnail.jpg" alt="" />
                                </a>
                                <div className="portfolio-caption">
                                    <h4>Finish</h4>
                                    <p className="text-muted">Identity</p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 portfolio-item">
                                <a className="portfolio-link" data-toggle="modal" href="#portfolioModal4">
                                    <div className="portfolio-hover">
                                        <div className="portfolio-hover-content">
                                            <i className="fa fa-plus fa-3x"></i>
                                        </div>
                                    </div>
                                    <img className="img-fluid" src="img/portfolio/04-thumbnail.jpg" alt="" />
                                </a>
                                <div className="portfolio-caption">
                                    <h4>Lines</h4>
                                    <p className="text-muted">Branding</p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 portfolio-item">
                                <a className="portfolio-link" data-toggle="modal" href="#portfolioModal5">
                                    <div className="portfolio-hover">
                                        <div className="portfolio-hover-content">
                                            <i className="fa fa-plus fa-3x"></i>
                                        </div>
                                    </div>
                                    <img className="img-fluid" src="img/portfolio/05-thumbnail.jpg" alt="" />
                                </a>
                                <div className="portfolio-caption">
                                    <h4>Southwest</h4>
                                    <p className="text-muted">Website Design</p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 portfolio-item">
                                <a className="portfolio-link" data-toggle="modal" href="#portfolioModal6">
                                    <div className="portfolio-hover">
                                        <div className="portfolio-hover-content">
                                            <i className="fa fa-plus fa-3x"></i>
                                        </div>
                                    </div>
                                    <img className="img-fluid" src="img/portfolio/06-thumbnail.jpg" alt="" />
                                </a>
                                <div className="portfolio-caption">
                                    <h4>Window</h4>
                                    <p className="text-muted">Photography</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

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
        );
    }
}
