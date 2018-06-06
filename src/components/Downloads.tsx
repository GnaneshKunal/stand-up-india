import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { map } from 'lodash';

import * as actions from '../actions';

interface IDownloadsProps {
    downloadFiles: any
    getDownloadFiles: any
}

class Downloads extends React.Component<IDownloadsProps, {}> {

    constructor(props: any) {
	super(props);
	this.props.getDownloadFiles();
    }

    public renderDownloadFiles() {
	let d_files = this.props.downloadFiles.d_files;

	if (d_files !== undefined  && d_files !== null && d_files.length > 0) {
	    return (
		<div>
		    <section className='bg-light' id='portfolio'>
			<div className='container'>
                            <div className='row'>
				<div className='col-lg-12 text-center'>
                                    <h2 className='section-heading text-uppercase'>Downloads</h2>
				</div>
                            </div>
                            <div className='row'>
				<div className='col-lg-12 text-center'>
                                    {/* <h2 className='section-heading text-uppercase'>No Files</h2> */}
				    <ul className="list-group">
					{
					    map(d_files, (f: any) => {
						return (
						    
						    <li className="list-group-item">
							<a href={f} style={{color: 'black'}}>
							    {decodeURI(f.split("/").slice(-1)[0])}
							</a>
						    </li>
						);
					    })
					}
				    </ul>
				</div>
                            </div>
			</div>
                    </section>
		</div>
	    );
	} else if (d_files !== undefined  && d_files !== null && d_files.length === 0) {
	    return (
		<section className='bg-light' id='portfolio'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-12 text-center'>
                                <h2 className='section-heading text-uppercase'>Downloads</h2>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-12 text-center'>
                                <h2 className='section-heading text-uppercase'>No Files</h2>
                            </div>
                        </div>
                    </div>
                </section>
	    );
	} else {
	    console.log(d_files);
	    return (
		<section className='bg-light' id='portfolio'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-12 text-center'>
                                <h2 className='section-heading text-uppercase'>Downloads</h2>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-12 text-center'>
                                <h2 className='section-heading text-uppercase'>Loading</h2>
                            </div>
                        </div>
                    </div>
                </section>
	    );
	}
    }

    public render(): JSX.Element {
	console.log(this.props);
	return (
	    <section id="downloads">
		<div>
		    {this.renderDownloadFiles()}
		</div>
	    </section>
	);
    }
}

const mapStateToProps = (state: any) => state;

export function mapDispatchToProps(dispatch: Dispatch<any>) {
    return {
        getDownloadFiles: () => dispatch<any>(actions.getDownloadFiles())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Downloads);
