import * as React from 'react';
import { Table, Thead, Th, Tr, Td } from 'reactable';
import { map, forEach, zip, zipObject } from 'lodash';
import Select from 'react-select';

import {
    BankWiseHeaders,
    BankWisePublicData,
    BankWisePrivateData,
    BranchWiseHeaders,
    BranchWiseData,
    ApplicationHeaders,
    ApplicationData
} from '../lib/bankData';

interface ILoanSanctionedState {
    selectedView: any
}

export default class LoanSanctioned extends React.Component<{}, ILoanSanctionedState> {

    constructor(props: any) {
        super(props);
        this.state = {
            selectedView: ''
        };

    }


    public makeBankWiseProgress() {

        let mPData: any = []

        forEach(BankWisePublicData, (d: any) => {
            mPData.push(
                zipObject(BankWiseHeaders, d.split('\t')
                ));
        })

        let mPriData: any = [];
        forEach(BankWisePrivateData, (d: any) => {
            mPriData.push(
                zipObject(BankWiseHeaders, d.split('\t')
                ));
        })
        return (
            <div>
                <h1>Public Banks</h1>
                <Table className="table" id="table" data={
                    mPData}
                    filterable={
                        BankWiseHeaders
                    } />
                <br />
                <h1>Private Banks</h1>
                <Table className="table" id="table" data={
                    mPriData}
                    filterable={
                        BankWiseHeaders
                    } />
            </div>);
    }

    public makeBranchWise() {

        let mData: any = [];
        forEach(BranchWiseData, (d: any) => {
            mData.push(
                zipObject(BranchWiseHeaders, d.split('\t')
                ));
        })
        return (
            <div>
                <h1>Branch Wise</h1>
                <Table className="table" id="table" data={
                    mData}
                    filterable={
                        BranchWiseHeaders
                    } />
            </div>);
    }

    makePickedApplications() {

        let mData: any = [];
        forEach(ApplicationData, (d: any) => {
            mData.push(
                zipObject(ApplicationHeaders, d.split('\t')
                ));
        })
        return (
            <div>
                <h1>Logged and Picked Up for processing Applications Bank Branch Wise</h1>
                <Table className="table" id="table" data={
                    mData}
                    filterable={
                        ApplicationHeaders
                    } />
            </div>);

    }

    public handleChange(selectedOption: any) {
        console.log(selectedOption);
        this.setState({ selectedView: selectedOption })
    }

    public makeTable() {

        const val = this.state.selectedView.value;
        if (val === 0)
            return this.makeBankWiseProgress();
        else if (val === 1)
            return this.makeBranchWise();
        else if (val === 2)
            return this.makePickedApplications();
        else
            return <br />
    }

    public render(): JSX.Element {
        console.log(this.props);
        return (
            <section id="">
                <div className="container">
                    <Select
                        autosize
                        className="form-control"
                        optionClassName="form-control"
                        name="form-field-name"
                        value={this.state.selectedView}
                        onChange={this.handleChange.bind(this)}
                        options={[
                            { value: 0, label: 'Bank Wise Progress' },
                            { value: 1, label: 'Branch Wise' },
                            { value: 2, label: 'Logged & Picked Applications' },
                            { value: 3, label: 'Caste Wise Breakup' }
                        ]}
                    />{/* 
			  <div className="row">
                          <div className="col-lg-12 "> */}
                    {this.makeTable()}
                    {/* </div>
			    </div> */}
                </div>
            </section >

        );
    }
}

