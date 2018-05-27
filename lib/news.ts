import * as mongoose from 'mongoose';

const newsModelSchema: mongoose.Schema = new mongoose.Schema({
    title: String,
    description: String,
    done: Boolean,
    date: Date
});

const newsModel = mongoose.model('news', newsModelSchema);

export default newsModel;
