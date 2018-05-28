/// <reference path="../types/index.d.ts" />
import * as React from 'react';

import Footer from './Footer';
import ContactForm from './ContactForm';
import Team from './Team';
import Services from './Services';
import ImageSlideShow from './ImageSlideShow';
import HomeImageSlideShow from './HomeImageSlideShow';
import AboutJourney from './AboutJourney';

import Events from './Events';

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

		    <Events />
		    
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
			<div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
			    <div className="carousel-inner">
				<div className="carousel-item active">
				    <div className="row">
					<div className="col-xs-6 pad-r">
					    <img className="img-fluid d-block mx-auto" src="https://www.dropbox.com/s/9i3ban9eh5cgic6/logobankofbaroda.jpg?raw=1" alt="Bank-of-baroda"/>
					</div>
					<div className="col-xs-6 pad-r">
					    <img className="img-fluid d-block mx-auto" src="https://www.dropbox.com/s/m3aa1awr0pflr69/Bank_of_India.png?raw=1" alt="Bank_of_India"/>
					</div>
				    </div>
				</div>
				<div className="carousel-item">
				    <div className="row">
					<div className="col-xs-6 pad-r">
					    <img className="img-fluid d-block mx-auto" src="https://www.dropbox.com/s/aaitlsdmwt4ufpc/canara-bank.jpeg?raw=1" alt="canara-bank"/>
					    
					</div>
					<div className="col-xs-6 pad-r">
					    
					    <img className="img-fluid d-block mx-auto" src="https://www.dropbox.com/s/pw7rlf0plb7y06l/City%20Union%20Bank.png?raw=1" alt="City-union-bank"/>
					</div>
				    </div>
				</div>
				<div className="carousel-item">
				    <div className="row">
					<div className="col-xs-6 pad-r">
					    <img className="img-fluid d-block mx-auto" src="https://www.dropbox.com/s/p5tenppb1dgqi3c/Allahabad-Bank.jpg?raw=1" alt="Allhabad-bank"/>
					</div>
					<div className="col-xs-6 pad-r">
					    <img className="img-fluid d-block mx-auto" src="https://www.dropbox.com/s/a4trtazqdxjwkuh/central-bank.jpg?raw=1" alt="central-bank"/>
					</div>
				    </div>
				</div>
				<div className="carousel-item">
				    <div className="row">
					<div className="col-xs-6 pad-r">
					    <img className="img-fluid d-block mx-auto" src="https://www.dropbox.com/s/z5q2get1mht4kov/sbi.jpg?raw=1" alt="SBI"/>
					</div>
					<div className="col-xs-6 pad-r">
					    <img className="img-fluid d-block mx-auto" src="https://www.dropbox.com/s/0o6mrf056iph21c/Corporation-Bank.png?raw=1" alt="Corporation-bank"/>
					</div>
				    </div>
				</div>
				<div className="carousel-item">
				    <div className="row">
					<div className="col-xs-6 pad-r">
					    <img className="img-fluid d-block mx-auto" src="https://www.dropbox.com/s/s6s1x52szzinndw/dena-bank.png?raw=1" alt="dena-bank"/>
					</div>
					
					<div className="col-xs-6 pad-r">
					    <img className="img-fluid d-block mx-auto" src="https://www.dropbox.com/s/jk50658kzlgnx84/federal-bank.png?raw=1" alt="federal-bank"/>
					</div>
				    </div>
				</div>
				<div className="carousel-item">
				    <div className="row">
					<div className="col-xs-6 pad-r">
					    <img className="img-fluid d-block mx-auto" src="https://www.dropbox.com/s/3i6otvnkpk1p1lv/dhanalakshmi-bank.jpg?raw=1" alt="danalakshimi-bank"/>
					</div>
					<div className="col-xs-6 pad-r">
					    <img className="img-fluid d-block mx-auto" src="https://www.dropbox.com/s/8h62mckxgsza96p/Axis_Bank_logo.png?raw=1" alt="axis-bank"/>
					</div>
				    </div>
				</div>
				
				<div className="carousel-item">
				    <div className="row">
					<div className="col-xs-6 pad-r">
					    <img className="img-fluid d-block mx-auto" src="https://www.dropbox.com/s/n6bcsmn51l1042i/hdfcbank.jpg?raw=1" alt="hdfc-bank"/>
					</div>
					<div className="col-xs-6 pad-r">
					    <img className="img-fluid d-block mx-auto" src="https://www.dropbox.com/s/kr4h0gbg5t40p8f/icici.png?raw=1" alt="icici-bank"/>
					</div>
				    </div>
				</div>
				<div className="carousel-item" >
				    <div className="row" >
					
					<div className="col-xs-6 pad-r">
					    <img className="img-fluid d-block mx-auto" src="https://www.dropbox.com/s/2lhad1zbyom45nu/iob.jpg?raw=1" alt="io-bank"/>
					</div>
					
					<div className="col-xs-6 pad-r">
					    <img className="img-fluid d-block mx-auto" src="https://www.dropbox.com/s/tid9q2koljpvecn/karnataka-bank.jpg?raw=1" alt="karnataka-bank"/>
					</div>
				    </div>
				</div>
				<div className="carousel-item">
				    <div className="row">
					<div className="col-xs-6 pad-r">
					    <img className="img-fluid d-block mx-auto" src="https://www.dropbox.com/s/mwg3e5qhkubs0d2/karur-bank.png?raw=1" alt="karur-bank"/>
					</div>
					<div className="col-xs-6 pad-r">
					    <img className="img-fluid d-block mx-auto" src="https://www.dropbox.com/s/2eqaj2y2l5lsvmg/kotak-bank.jpg?raw=1" alt="kotak-bank"/>
					</div>
				    </div>
				</div>

				<div className="carousel-item">
				    <div className="row">
					<div className="col-xs-6 pad-r">
					    <img className="img-fluid d-block mx-auto" src="https://www.dropbox.com/s/exe8xwf4ty8bijd/lakshimi-bank.png?raw=1" alt="lakshimi-bank"/>
					</div>
					
					<div className="col-xs-6 pad-r">
					    <img className="img-fluid d-block mx-auto" src="https://www.dropbox.com/s/fhpy3mz0xc5gd58/yes-bank.png?raw=1" alt="yes-bank"/>
					</div>
				    </div>
				</div>
				
				<div className="carousel-item">
				    <div className="row">
					<div className="col-xs-6 pad-r">
					    <img className="img-fluid d-block mx-auto" src="https://www.dropbox.com/s/vrbtoh1tgw34tne/punjab-bank.png?raw=1" alt="punjab-bank"/>
					</div>
					<div className="col-xs-6 pad-r">
					    <img className="img-fluid d-block mx-auto" src="https://www.dropbox.com/s/oqs261nbc88k9qd/ratnakar-bank.png?raw=1" alt="ratnakar-bank"/>
					</div>
				    </div>
				</div>

				<div className="carousel-item">
				    <div className="row">
					<div className="col-xs-6 pad-r">
					    <img className="img-fluid d-block mx-auto" src="https://www.dropbox.com/s/lmcedqmwvyidftt/South_Indian_Bank_Log.png?raw=1" alt="south-indian-bank"/>
					</div>
					<div className="col-xs-6 pad-r">
					    <img className="img-fluid d-block mx-auto" src="https://www.dropbox.com/s/9y4zh0ya456u3kh/syndicate-bank.jpg?raw=1" alt="syndicate-bank"/>
					</div>
				    </div>
				</div>

				<div className="carousel-item">
				    <div className="row">
					<div className="col-xs-6 pad-r">
					    <img className="img-fluid d-block mx-auto" src="https://www.dropbox.com/s/gqmy6nioa5icvti/uco.png?raw=1" alt="uco-bank"/>
					</div>
					<div className="col-xs-6 pad-r">
					    <img className="img-fluid d-block mx-auto" src="https://www.dropbox.com/s/p9f9o27kz5pjfou/union-bank.jpg?raw=1" alt="union-bank"/>
					</div>
				    </div>
				</div>

				<div className="carousel-item">
				    <div className="row">
					
					<div className="col-xs-6 pad-r">
					    <img className="img-fluid d-block mx-auto" src="https://www.dropbox.com/s/iurgw7ov44uqk8v/UBI.jpg?raw=1" alt="UBI-bank"/>
					</div>
					
					<div className="col-xs-6 pad-r">
					    <img className="img-fluid d-block mx-auto" src="	https://www.dropbox.com/s/7agig42wwfi951a/vijaya-bank.jpg?raw=1" alt="vijaya-bank"/>
					</div>
				    </div>
				</div>
				
				<div className="carousel-item">
				    <div className="row">
					
					<div className="col-xs-6 pad-r">
					    <img className="img-fluid d-block mx-auto" src="https://www.dropbox.com/s/p9f9o27kz5pjfou/union-bank.jpg?raw=1" alt="union-bank"/>
					</div>
					<div className="col-xs-6 pad-r">
					    <img className="img-fluid d-block mx-auto" src="https://www.dropbox.com/s/8h3vrdcgxx34kkd/andhra-bank.png?raw=1" alt="UBI-bank"/>
					</div>
				    </div>
				</div>

				<div className="carousel-item">
				    <div className="row">
					<div className="col-xs-6 pad-r">
					    <img className="img-fluid d-block mx-auto" src="https://www.dropbox.com/s/ja7vzo9tgidjgu3/indian-bank.png?raw=1" alt="uco-bank"/>
					</div>
					<div className="col-xs-6 pad-r">
					    <img className="img-fluid d-block mx-auto" src="https://www.dropbox.com/s/8nomo3rsvsfuaui/saptagiri-bank.jpg?raw=1" alt="saptagiri-bank"/>
					</div>
					
				    </div>
				</div>
			    </div>
			</div>
                    </section>


		    {/* <section className="py-5">
			
			<div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
			<div className="carousel-inner">
			<div className="carousel-item active">
			<img className="img-fluid d-block mx-auto" src="https://www.dropbox.com/s/9i3ban9eh5cgic6/logobankofbaroda.jpg?raw=1" alt="Bank-of-baroda"/>
			</div>
			
			<div className="carousel-item">
			<img className="img-fluid d-block mx-auto" src="https://www.dropbox.com/s/m3aa1awr0pflr69/Bank_of_India.png?raw=1" alt="Bank_of_India"/>
			</div>
			
			<div className="carousel-item">
			<img className="img-fluid d-block mx-auto" src="https://www.dropbox.com/s/aaitlsdmwt4ufpc/canara-bank.jpeg?raw=1" alt="canara-bank"/>
			</div>
			<div className="carousel-item">
			<img className="img-fluid d-block mx-auto" src="https://www.dropbox.com/s/p5tenppb1dgqi3c/Allahabad-Bank.jpg?raw=1" alt="Allhabad-bank"/>
			</div>
			<div className="carousel-item">
			<img className="img-fluid d-block mx-auto" src="https://www.dropbox.com/s/a4trtazqdxjwkuh/central-bank.jpg?raw=1" alt="central-bank"/>
			</div>
			<div className="carousel-item">
			<img className="img-fluid d-block mx-auto" src="https://www.dropbox.com/s/pw7rlf0plb7y06l/City%20Union%20Bank.png?raw=1" alt="City-union-bank"/>
			</div>
			<div className="carousel-item">
			<img className="img-fluid d-block mx-auto" src="https://www.dropbox.com/s/z5q2get1mht4kov/sbi.jpg?raw=1" alt="SBI"/>
			</div>
			<div className="carousel-item">
			<img className="img-fluid d-block mx-auto" src="https://www.dropbox.com/s/0o6mrf056iph21c/Corporation-Bank.png?raw=1" alt="Corporation-bank"/>
			</div>
			<div className="carousel-item">
			<img className="img-fluid d-block mx-auto" src="https://www.dropbox.com/s/s6s1x52szzinndw/dena-bank.png?raw=1" alt="dena-bank"/>
			</div>
			<div className="carousel-item">
			<img className="img-fluid d-block mx-auto" src="https://www.dropbox.com/s/3i6otvnkpk1p1lv/dhanalakshmi-bank.jpg?raw=1" alt="danalakshimi-bank"/>
			</div>
			<div className="carousel-item">
			<img className="img-fluid d-block mx-auto" src="https://www.dropbox.com/s/8h62mckxgsza96p/Axis_Bank_logo.png?raw=1" alt="axis-bank"/>
			</div>
			<div className="carousel-item">
			<img className="img-fluid d-block mx-auto" src="https://www.dropbox.com/s/jk50658kzlgnx84/federal-bank.png?raw=1" alt="federal-bank"/>
			</div>
			<div className="carousel-item">
			<img className="img-fluid d-block mx-auto" src="https://www.dropbox.com/s/n6bcsmn51l1042i/hdfcbank.jpg?raw=1" alt="hdfc-bank"/>
			</div>
			<div className="carousel-item">
			<img className="img-fluid d-block mx-auto" src="https://www.dropbox.com/s/kr4h0gbg5t40p8f/icici.png?raw=1" alt="icici-bank"/>
			</div>
			<div className="carousel-item">
			<img className="img-fluid d-block mx-auto" src="https://www.dropbox.com/s/2lhad1zbyom45nu/iob.jpg?raw=1" alt="io-bank"/>
			</div>
			<div className="carousel-item">
			<img className="img-fluid d-block mx-auto" src="https://www.dropbox.com/s/tid9q2koljpvecn/karnataka-bank.jpg?raw=1" alt="karnataka-bank"/>
			</div>
			<div className="carousel-item">
			<img className="img-fluid d-block mx-auto" src="https://www.dropbox.com/s/mwg3e5qhkubs0d2/karur-bank.png?raw=1" alt="karur-bank"/>
			</div>
			<div className="carousel-item">
			<img className="img-fluid d-block mx-auto" src="https://www.dropbox.com/s/2eqaj2y2l5lsvmg/kotak-bank.jpg?raw=1" alt="kotak-bank"/>
			</div>
			<div className="carousel-item">
			<img className="img-fluid d-block mx-auto" src="https://www.dropbox.com/s/exe8xwf4ty8bijd/lakshimi-bank.png?raw=1" alt="lakshimi-bank"/>
			</div>
			<div className="carousel-item">
			<img className="img-fluid d-block mx-auto" src="https://www.dropbox.com/s/vrbtoh1tgw34tne/punjab-bank.png?raw=1" alt="punjab-bank"/>
			</div>
			<div className="carousel-item">
			<img className="img-fluid d-block mx-auto" src="https://www.dropbox.com/s/oqs261nbc88k9qd/ratnakar-bank.png?raw=1" alt="ratnakar-bank"/>
			</div>
			<div className="carousel-item">
			<img className="img-fluid d-block mx-auto" src="https://www.dropbox.com/s/8nomo3rsvsfuaui/saptagiri-bank.jpg?raw=1" alt="saptagiri-bank"/>
			</div>
			<div className="carousel-item">
			<img className="img-fluid d-block mx-auto" src="https://www.dropbox.com/s/lmcedqmwvyidftt/South_Indian_Bank_Log.png?raw=1" alt="south-indian-bank"/>
			</div>
			<div className="carousel-item">
			<img className="img-fluid d-block mx-auto" src="https://www.dropbox.com/s/9y4zh0ya456u3kh/syndicate-bank.jpg?raw=1" alt="syndicate-bank"/>
			</div>
			<div className="carousel-item">
			<img className="img-fluid d-block mx-auto" src="https://www.dropbox.com/s/gqmy6nioa5icvti/uco.png?raw=1" alt="uco-bank"/>
			</div>
			<div className="carousel-item">
			<img className="img-fluid d-block mx-auto" src="https://www.dropbox.com/s/p9f9o27kz5pjfou/union-bank.jpg?raw=1" alt="union-bank"/>
			</div>
			<div className="carousel-item">
			<img className="img-fluid d-block mx-auto" src="https://www.dropbox.com/s/iurgw7ov44uqk8v/UBI.jpg?raw=1" alt="UBI-bank"/>
			</div>
			<div className="carousel-item">
			<img className="img-fluid d-block mx-auto" src="	https://www.dropbox.com/s/7agig42wwfi951a/vijaya-bank.jpg?raw=1" alt="vijaya-bank"/>
			</div>
			<div className="carousel-item">
			<img className="img-fluid d-block mx-auto" src="https://www.dropbox.com/s/fhpy3mz0xc5gd58/yes-bank.png?raw=1" alt="yes-bank"/>
			</div>
			<div className="carousel-item">
			<img className="img-fluid d-block mx-auto" src="https://www.dropbox.com/s/8h3vrdcgxx34kkd/andhra-bank.png?raw=1" alt="UBI-bank"/>
			</div>
			<div className="carousel-item">
			<img className="img-fluid d-block mx-auto" src="https://www.dropbox.com/s/ja7vzo9tgidjgu3/indian-bank.png?raw=1" alt="uco-bank"/>
			</div>
			<div className="carousel-item">
			<img className="img-fluid d-block mx-auto" src="https://www.dropbox.com/s/p9f9o27kz5pjfou/union-bank.jpg?raw=1" alt="union-bank"/>
			</div>
			<div className="carousel-item">
			<img className="img-fluid d-block mx-auto" src="https://www.dropbox.com/s/iurgw7ov44uqk8v/UBI.jpg?raw=1" alt="UBI-bank"/>
			</div>
			</div>
			</div>
			</section>
		      */}
		    

                    {/* Contact */}
                    <ContactForm />

                    {/* Footer */}
                    <Footer />

                </div>
            </div>);
    }
}
