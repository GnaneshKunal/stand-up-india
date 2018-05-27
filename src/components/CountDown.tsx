import * as React from 'react';
import * as moment from 'moment';
import Timer from 'react-t-minus-timer';

class CountDown extends React.Component<{}, {}> {
    constructor(props: any) {
	super(props);
    }

    public render(): JSX.Element {
	return (
	    <div>
		<div className="card text-center">
		    <div className="card-header">
			Featured
		    </div>
		    <div className="card-body">
			<h5 className="card-title">Special title treatment</h5>
			<p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
			<a href="#" className="btn btn-primary">Go somewhere</a>
		    </div>
		    <div className="card-footer text-muted">
			<Timer endTime='2018-06-01T00:00:00.000+07:00' />
		    </div>
		</div>
	    </div>
	);
    }
}

export default CountDown;
