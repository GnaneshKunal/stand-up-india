import * as express from 'express';
import * as fs from 'fs';
import StandUpIndia from './model';

import { sendMail } from './email';

const StandUpIndiaRouter = express.Router();

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

StandUpIndiaRouter.get('/success-pics', (_, res: express.Response) => {
    fs.readdir('./img/success', (err: Error, pics: Array<string>) => {
        if (err)
            return res.status(500).send({
                data: 'Something went wrong'
            });
        return res.status(200).send({
            data: pics
        });
    });
});

StandUpIndiaRouter.post('/form', (req: express.Request, res: express.Response) => {
    if (sendMail(req.body))
        return res.status(200).send({
            data: 'Mail has been sent'
        });
    else
        return res.status(400).send({
            data: 'Bad Request'
        });
});

export default StandUpIndiaRouter;
