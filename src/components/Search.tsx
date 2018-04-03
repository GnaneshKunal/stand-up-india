import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import * as actions from '../actions';

interface ISearchState {
    search: string
}

interface IDocSchema {
    'Enterprise Name': string,
    'District': string,
    'Address': string,
}

interface ISearchProps {
    getDocs: Function,
    search: any,
    data: any
}

class Search extends React.Component<ISearchProps, ISearchState> {
    constructor(props: any) {
        super(props);

        this.state = {
            search: ''
        }

    }

    onFormSubmit(event: any) {
        event.preventDefault();

        if (this.state.search.trim() !== '') {
            this.props.getDocs({
                search: this.state.search
            });
        }
    }

    onChangeSearchHandler(event: any) {
        this.setState({ search: event.target.value });
        if (this.state.search.trim() !== '') {
            this.props.getDocs({
                search: this.state.search
            });
        }
    }

    renderDocs(data: any) {
        if (data !== undefined && data !== null) {
            return (
                <div className="list-group">
                    {
                        data.map((x: any) => {
                            let appNo = x["Application No"];
                            let enterpriseName = x["Enterprise Name"];
                            let distict = x["District"];
                            let address = x["Address"];
                            return (
                                <Link to={`/doc?id=${appNo}`} className="list-group-item list-group-item-action flex-column align-items-start">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">{enterpriseName}</h5>
                                        <small>{distict}</small>
                                    </div>
                                    <p className="mb-1">{address}</p>
                                    <small>{appNo}</small>
                                </Link>
                            );
                        })
                    }
                </div>
            );
        } else {
            return (
                <div>
                </div>
            );
        }
    }

    renderForm(): JSX.Element {
        return (
            <div className="container" style={{"margin-left": "30%", "margin-top": "20%"}}>
                <div className="row clearfix">
                    <div className="col-md-12 column">
                        <div className="col-md-6 col-md-offset-3 column">
                            <form role="form" onSubmit={this.onFormSubmit.bind(this)}>
                                <div className="form-group">
                                    <label className="h1" style={{"padding-left": "30%"}}>Search Application</label>
                                    <input type="text" 
                                           name="search" className="form-control text-center"
                                           value={this.state.search}
                                           placeholder="Search Applications"
                                           onChange={event => {
                                                   this.onChangeSearchHandler(event);
                                           }}
                                    />
                                </div>
                                <div className="form-group">
                                    <div className="col-md-6 text-center"> 
                                        <button id="singlebutton" style={{"padding": "10px 92% 10px 92% ", "text-align": "center"}} className="btn btn-primary">Search</button> 
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6 col-md-offset-3 column">
                            {this.renderDocs(this.props.search.data)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    public render(): JSX.Element {
        return (
            <div>
            {this.renderForm()}
            </div>
        );
    }
}

const mapStateToProps = (state: any) => state;

export function mapDispatchToProps(dispatch: Dispatch<any>) {
    return {
        getDocs: (search: { search: string }) => dispatch<any>(actions.getDocs(search))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
