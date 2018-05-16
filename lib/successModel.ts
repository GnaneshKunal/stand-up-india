import * as mongoose from 'mongoose';

const successModelSchema: mongoose.Schema = new mongoose.Schema({
    name: String,
    businessName: String,
    phone: String,
    email: String,
    message: String,
    pic: String,
    vid: String,
    businessNature: String,
    firstTime: String,
    location: String,
    place: String,
    pincode: String,
    district: String,
    state: String,
    bank: String,
    year: String,
    loan: String,
    brief: String
});

const SuccessModel = mongoose.model('successmodel', successModelSchema);

export default SuccessModel;
