import * as React from 'react';

interface IHomePageProps {
}

export default class HomePage extends React.Component<IHomePageProps, {}> {
    public render(): JSX.Element {
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
                            {/*
				<div className="collapse navbar-collapse" id="navbarResponsive">
                                <ul className="navbar-nav text-uppercase ml-auto">
                                <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#services">Services</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#about">About</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#team">Team</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
                                </li>
                                </ul>
				</div>
			      */}
                        </div>
                    </nav>

                    {/*Header*/}
                    <header className="masthead">
                        <div className="container">
                            <div className="intro-text">
                                <div className="intro-lead-in"><span style={{ color: 'black' }}>Welcome To StandUp India Loans!</span></div>
                                <div className="intro-heading text-uppercase"><span style={{ color: 'black', backgroundColor: 'yellow' }}>Comming Soon</span></div>
                                <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Comming Soon</a>
                            </div>
                        </div>
                    </header>
                </div>
            </div>);
    }
}
