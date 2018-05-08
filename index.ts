import * as express from 'express';
import * as path from 'path';
import * as http from 'http';
import * as dotenv from 'dotenv';
import * as mongoose from 'mongoose';
import * as cors from 'cors';
import * as fs from 'fs';
import * as bodyParser from 'body-parser';

import 'isomorphic-fetch';
import { Dropbox } from 'dropbox';

dotenv.config();

const PORT: string | number = process.env.PORT || 8080;

const url: string = process.env.MONGO_URI || 'mongodb://localhost:27017/standup';

import StandUpIndiaRouter from './lib/router'

mongoose.connect(<string>url, (err: mongoose.Error) => {
    if (err) {
        console.log(err.message);
        console.log(err);
    } else {
        console.log('Connected to MongoDB');
    }
});

(<any>mongoose).Promise = global.Promise;

class App {
    public express: express.Application;

    constructor() {
        this.express = express();
        this.mountRoutes();
    }

    private mountRoutes(): void {
        const router: express.Router = express.Router();
        this.express.use(cors());
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use(express.static('.'));
        router.get(['/', '/doc', '/search', '/success-stories', '/meetings'], (_, res: express.Response) => {
            return res.sendFile(path.join(__dirname + '/../', 'index.html'));
        });
        this.express.use('/', router);
        this.express.use('/api', StandUpIndiaRouter);
    }
}

const app: express.Application = new App().express;
const server: http.Server = http.createServer(app);

server.listen(PORT, (err: Error): void | never => {
    if (err) {
        throw err;
    }
    /* tslint:disable */
    return console.log('Server listening on PORT: ' + PORT);
    /* tslint:enable */
});
