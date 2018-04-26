import * as express from 'express';
import * as path from 'path';
import * as http from 'http';
import * as dotenv from 'dotenv';
import * as mongoose from 'mongoose';

dotenv.config();

import StandUpIndia from './lib/model';

const PORT: string | number = process.env.PORT || 8080;

let url: String = process.env.MONGO_URI || 'mongodb://localhost:27017/standup';

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

    StandUpIndiaRouter() {
        const StandUpIndiaRouter = express.Router()

        StandUpIndiaRouter.get('/search', (req: express.Request, res: express.Response) => {
            const query = req.query.q;
            if (!query) {
                return res.status(400).send({
                    data: 'Please specify query'
                });
            }

            StandUpIndia.find({ 'Application No': new RegExp(query, 'i') })
                .limit(10)
                .select({ 'Enterprise Name': 1, 'District': 1, 'Address': 1, '_id': 0, 'Application No': 1 })
                .exec((err: Error, docs: Array<any>) => {
                    if (err)
                        return res.status(500).send({
                            data: 'Sorry, Error'
                        });
                    return res.status(200).send({
                        data: docs
                    });
                });
        });

        StandUpIndiaRouter.get('/doc', (req: express.Request, res: express.Response) => {
            const appID = req.query.id;
            if (!appID)
                return res.status(400).send({
                    data: 'Please specify an id'
                });

            StandUpIndia.find({ 'Application No': appID })
                .select({ 's': 0, '_id': 0 })
                .exec((err: Error, doc: any) => {
                    if (err)
                        return res.status(500).send({
                            data: 'Something went wrong'
                        });
                    return res.status(200).send({
                        data: doc
                    });
                });
        });

        return StandUpIndiaRouter;
    }

    private mountRoutes(): void {
        const router: express.Router = express.Router();
        this.express.use(express.static('.'));
        router.get(['/', '/doc', '/search'], (_, res: express.Response) => {
            return res.sendFile(path.join(__dirname + '/../', 'index.html'));
        });
        this.express.use('/', router);
        this.express.use('/api', this.StandUpIndiaRouter());
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
