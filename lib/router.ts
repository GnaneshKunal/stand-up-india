import * as express from 'express';
import * as fs from 'fs';
import StandUpIndia from './model';
import { Dropbox } from 'dropbox';
import { map, compact } from 'lodash';

const dbx = new Dropbox({ accessToken: process.env.DROPBOX_ACCESS_TOKEN });

import { sendMail } from './email';

const StandUpIndiaRouter = express.Router();

async function fetchPics(path: string, res: express.Response) {
    let i = 0;
    let links: Array<string> = [];
    dbx.filesListFolder({ path })
        .then((files: any) => {
            return map(files.entries, async (file: any) => {
                await dbx.sharingCreateSharedLink({ path: file.path_lower })
                    .then((fileMetaData: any) => {
                        links.push(fileMetaData.url.split("?")[0] + "?raw=1");
                        if (files.entries.length === links.length) {
                            return res.status(200).send({
                                data: links
                            });
                        }
                    })
                    .catch((err) => {
                        return res.status(500).send({
                            data: err
                        });
                    });
            });
        })
        .catch((err) => {
            return res.status(500).send({
                data: err
            });
        });
}

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
    fetchPics('/success_pics', res);
});

StandUpIndiaRouter.get('/meetings-pics', (_, res: express.Response) => {
    fetchPics('/meetings', res);
});

StandUpIndiaRouter.post('/form', (req: express.Request, res: express.Response) => {
    sendMail(req.body);
    return res.status(200).send({
        data: 'Mail has been sent'
    });
});

export default StandUpIndiaRouter;
