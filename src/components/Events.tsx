import * as React from 'react';
import * as moment from 'moment';
import Timer from 'react-t-minus-timer';

class Events extends React.Component<{}, {}> {
    constructor(props: any) {
	super(props);
    }

    public render(): JSX.Element {
	return (
	    <section className="bg-light" id="events">
		<div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading text-uppercase">Events and Initiatives</h2>
                        <h3 className="section-subheading text-muted">Join us to eradicate poverty through Business.</h3>
                    </div>
                </div>
		<div className="card text-center">
		    <div className="card-body">
			<h5 className="card-title">StandUp India Day</h5>
			<p className="card-text">StandUp India Day is coming soon.</p>
			<a href="#" className="btn btn-primary">JUNE 2nd
			    <Timer endTime={moment("20180602","YYYYMMDD").toISOString()} />
			</a>
		    </div>
		</div>
		<br />
		<div className="row">
		    <div className="col-sm-6">
			<div className="card  text-center">
			    <div className="card-body">
				<h5 className="card-title">EDP Programme</h5>
				<p className="card-text">Entrepreneur Development Programme(EDP) <br />by DIC</p>
				<a href="#" className="btn btn-primary">
				    5th
				    <Timer endTime={moment("20180605","YYYYMMDD").toISOString()} />
				</a>
			    </div>
			</div>
		    </div>
		    <div className="col-sm-6">
			<div className="card  text-center">
			    <div className="card-body">
				<h5 className="card-title">Awareness Programme</h5>
				<p className="card-text"><small>Awareness programme on Economic support Schemes, Mudra Loans, PMEGP, StartUp India Loans, StandUp India Loans, MSME Loans and MEGA Loans by Microsmartware pvt ltd.</small></p>
				<a href="#" className="btn btn-primary">
				    JUNE 9th
				    <Timer endTime={moment("20180609","YYYYMMDD").toISOString()} />
				</a>
			    </div>
			</div>
		    </div>
		</div>
	    </section>
	);
    }
}

export default Events;
