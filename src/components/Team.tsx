import * as React from 'react';

export default class Team extends React.Component<{}, {}> {
    public render(): JSX.Element {
        return (

            <section className="bg-light" id="team">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                            <h3 className="section-subheading text-muted">{/* Something about the tea */}</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 text-center" >
                            <div className="team-member">
                                <img className="mx-auto rounded-circle" src="img/team/1.png" alt="" />
                                <h4>David Brainard</h4>
                                <p className="text-muted">Lead Member</p>
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
                            <p className="large text-muted"></p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

