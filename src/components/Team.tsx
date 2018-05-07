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
                                <p className="text-muted">Chairman and CEO of Microsmartware.Pvt. Ltd</p>
                                <p> David Brainard’s  goal is to help you achieve your personal and business goals faster and easier than you ever imagined. He is   a Success expert and Motivational speaker addressed more than 50,000  people in  talks and seminars throughout the Chittoor District, A.P, India , Gulf countries and Europe  like Germany and As a Keynote speaker and seminar leader, he addresses more than 5, 000  people every year. He has studied,  mini researched, spoken for  20 years in the fields of economics, history, business,  English, philosophy , psychology and   Artificial Intelligence and Human Intelligence . He speaks to corporate and public audiences on the subjects of Personal and Professional Development, including the executives and staff of many of Orgnisations. His exciting talks and seminars on Leadership, Selling, Self-Esteem, Goals, Strategy, Creativity and Success Psychology bring about immediate changes and long-term results.  His speeches   brought, bringing and will bring  Microlevel changes in Communities  to create wealth for communities and Jobs for Its People.</p>
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
                </div>
            </section>
        );
    }
}

