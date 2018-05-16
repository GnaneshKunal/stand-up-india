import * as React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            <div id="page-top">
                {/*Navigation*/}
                <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                    <div className="container">
                        <Link className="navbar-brand js-scroll-trigger" to="/">StandUp India Loans</Link>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            Menu
			    <i className="fa fa-bars"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav text-uppercase ml-auto">

                                <li className="nav-item">
                                    <Link className="nav-link js-scroll-trigger" to="/search">Search</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link js-scroll-trigger" to="/#services">Services</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link js-scroll-trigger" to="/success-stories">Success Stories</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link js-scroll-trigger" to="/success-submit">Success Submit</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link js-scroll-trigger" to="/meetings">Meetings</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link js-scroll-trigger" to="/#about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link js-scroll-trigger" to="/#team">Team</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link js-scroll-trigger" to="/#contact">Contact</Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                </nav>
            </div>
        </div>
    );
}
