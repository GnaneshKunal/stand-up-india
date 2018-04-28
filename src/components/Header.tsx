import * as React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            <div id="page-top">
                {/*Navigation*/}
                <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                    <div className="container">
                        <a className="navbar-brand js-scroll-trigger" href="#page-top">StandUp India Loans</a>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            Menu
		    <i className="fa fa-bars"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav text-uppercase ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link js-scroll-trigger" href="#services" to="/">Services</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link js-scroll-trigger" href="#portfolio" to="/">Portfolio</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link js-scroll-trigger" href="#about" to="/">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link js-scroll-trigger" href="#team" to="/">Team</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link js-scroll-trigger" href="#contact" to="/">Contact</Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                </nav>
            </div>
        </div>
    );
}
