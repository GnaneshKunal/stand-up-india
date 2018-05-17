import * as React from 'react';
import { Table, Thead, Th, Tr, Td } from 'reactable';
import { map, forEach, zip, zipObject } from 'lodash';
import Select from 'react-select';

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
        const headers = ['S.No', 'Name of the Bank', 'No. of Branches', 'Target Under SUI', 'Total Sanctions 20.04.18 as per portal', 'Total Sanctions 26.04.18 per portal', 'Amount Sanctioned', 'Bal. of units to be sanctioned as per Portal', '% of Achivements as per portal', 'Logged Applications', 'Picked up for processing'];
        const publicBankData = [
            "1	Allahabad Bank	2	4	0	0	0.00	4	0.00	1	0",
            "2	Andhra Bank	67	134	148	148	2201.83	- 14	110.45	11	5",
            "3	Bank of Baroda	8	16	1	1	28.00	15	6.25	4",

            "4	Bank of India	11	22	21	21	489.50	1	95.45	7	1",

            "5	Bank of Maharashtra	1	2	0	0	0.00	2	0.00",
            "6	Canara Bank	28	56	44	44	1201.30	12	78.57	9	11",
            "7	Central Bank of India	5	10	3	3	96.50	7	30.00	1	1",
            "8	Corporation Bank	12	24	16	16	314.67	8	66.67	6	1",
            "9	Dena Bank	3	6	4	5	61.60	1	83.33	1",
            "10	IDBI Bank	5	10	4	4	61.50	6	40.00	1	2",
            "11	Indian Bank	49	98	105	104	2185.93	- 6	106.12	19	10",
            "12	Indian Overseas Bank	19	38	6	6	92.19	32	15.79	10	3",
            "13	Oriental Bank	3	6	0	0	0.00	6	0.00",
            "14	Punjab & Sind Bank	1	2	0	0	0.00	2	0.00",
            "15	Punjab National Bank	3	6	4	4	43.60	2	66.67		1",
            "16	RRB Saptagiri GB	129	258	141	141	2694.87	117	54.65	64	10",
            "17	State Bank of India	94	188	88	90	1899.62	98	47.87	46	56",
            "18	Syndicate Bank	30	60	20	20	411.00	40	33.33	8	2",
            "19	UCO Bank	5	10	2	2	60.00	8	20.00	1	1",
            "20	Union Bank of India	12	24	5	5	155.09	19	20.83	9",
            "21	United Bank of India	3	6	5	5	260.00	1	83.33		1",
            "22	Vijaya Bank	8	16	3	3	65.00	13	18.75	1	2",
            "TOTAL		498	996	620	622	12322.20	374	62.45	199	107"
        ];
        let mPData: any = []

        forEach(publicBankData, (d: any) => {
            mPData.push(
                zipObject(headers, d.split('\t')
                ));
        })
        const privateBankData: any = [
            "1	Axis Bank	9	18	0	0	0.00	18	0.00	2",
            "2	City Union Bank	3	6	0	0	0.00	6	0.00",
            "3	Dhanalaxmi Bank	1	2	0	0	0.00	2	0.00",
            "4	Federal Bank	2	4	1	1	75.00	3	25.00",
            "5	HDFC Bank	9	18	0	0	0.00	18	0.00	6",
            "6	ICICI Bank	14	28	0	0	0.00	28	0.00	3",
            "7	Indusind Bank	2	4	4	4	72.37	0	100.00",
            "8	Karnataka Bank	2	4	1	1	16.50	3	25.00	1",
            "9	Karur vysya Bank	11	22	0	0	0.00	22	0.00	5",
            "10	Kotak Mahindra Bank	14	28	0	0	0.00	28	0.00	5",
            "11	Laxmi Vilas Bank	3	6	0	0	0.00	6	0.00",
            "12	Ratnakar Bank	1	2	0	0	0.00	2	0.00",
            "13	South Indian Bank	1	2	0	0	0.00	2	0.00",
            "14	T M Bank	2	4	0	0	0.00	4	0.00",
            "15	YES Bank	2	4	0	0	0.00	4	0.00",
            "TOTAL		76	152	6	6	163.87	146	3.95	22	0",
            "Total Portal		574	1148	626	628	12486.07	520	54.70	221	107"
        ];
        let mPriData: any = [];
        forEach(privateBankData, (d: any) => {
            mPriData.push(
                zipObject(headers, d.split('\t')
                ));
        })
        return (
            <div>
                <h1>Public Banks</h1>
                <Table className="table" id="table" data={
                    mPData}
                    filterable={
                        headers
                    } />
                <br />
                <h1>Private Banks</h1>
                <Table className="table" id="table" data={
                    mPriData}
                    filterable={
                        headers
                    } />
            </div>);
    }

    public handleChange(selectedOption: any) {
        console.log(selectedOption);
        this.setState({ selectedView: selectedOption })
    }

    public makeTable() {

        if (this.state.selectedView.value === 0)
            return this.makeBankWiseProgress()
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
                    />
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            {this.makeTable()}
                        </div>
                    </div>
                </div>
            </section >

        );
    }
}

