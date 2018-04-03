import * as mongoose from 'mongoose';

/*
export interface IStandUpIndia extends mongoose.Document {
    `s.no`: {
        
    },State,District,Application No,Application Type,Scheme,Enterprise Name,Unit Name,Email Id,Mobile No,Address,Gender,Women Promoter,Category,Minority Status,Constitution,Nature of Business Activity,Status,Submission Date,Bank,Branch,Size of Loan,Sanctioned Amount,Sanctioned Date,Sanctioned As On Date,CBS Id,Is Rupay Issued,Disbursed Amount,Disbursed Date,Repayment Amount,Outstanding Amount,Covered under Guarantee/Collateral,Expected Employment,Loan Account Status,Preferred 1 Bank,Preferred 1 Branch,Preferred 2 Bank,Preferred 2 Branch,Preferred 3 Bank,Preferred 3 Branch,PickedUpDates,PickedUpbyBanks,DisbursedbyBank
}
*/
const StandUpIndiaSchema: mongoose.Schema  = new mongoose.Schema({
    's.no': {
        type: Number,
    },
    'State': {
        type: String,
    },
    'District': {
        type: String
    },
    'Application No': {
        type: String,
    },
    'Application Type': {
        type: String
    },
    'Scheme': {
        type: String
    },
    'Enterprise Name': {
        type: String
    },
    'Unit Name': {
        type: String
    },
    'Email Id': {
        type: String,
    },
    'Mobile No': {
        type: Number,
    },
    'Address': {
        type: String
    },
    'Gender': {
        type: String
    },
    'Women Promoter': {
        type: String
    },
    'Category': {
        type: String
    },
    'Minority Status': {
        type: String
    },
    'Constitution': {
        type: String
    },
    'Nature of Business Activity': {
        type: String
    },
    'Status': {
        type: String
    },
    'Submission Date': {
        type: String
    },
    'Bank': {
        type: String
    },
    'Branch': {
        type: String
    },
    'Size of Loan': {
        type: Number
    },
    'Sanctioned Amount': {
        type: Number
    },
    'Sanctioned Date': {
        type: String
    },
    'Sanctioned As On Date': {
        type: String
    },
    'CBS Id': {
        type: String
    },
    'Is Rupay Issued': {
        type: String
    },
    'Disbursed Amount': {
        type: String
    },
    'Disbursed Date': {
        type: String
    },
    'Repayment Amount': {
        type: String
    },
    'Outstanding Amount': {
        type: String
    },
    'Covered under Guarantee/Collateral': {
        type: String
    },
    'Expected Employment': {
        type: String
    },
    'Loan Account Status': {
        type: String
    },
    'Preferred 1 Bank': {
        type: String
    },
    'Preferred 1 Branch': {
        type: String
    },
    'Preferred 2 Bank': {
        type: String
    },
    'Preferred 2 Branch': {
        type: String
    },
    'Preferred 3 Bank': {
        type: String
    },
    'Preferred 3 Branch': {
        type: String
    },
    'PickedUpDates': {
        type: String
    },
    'PickedUpbyBanks': {
        type: String
    },
    'DisbursedbyBank': {
        type: String
    }
});

const StandUpIndia = mongoose.model('StandUpIndia', StandUpIndiaSchema);

export default StandUpIndia;
