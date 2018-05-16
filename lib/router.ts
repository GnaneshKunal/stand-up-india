import * as express from 'express';
import * as fs from 'fs';
import StandUpIndia from './model';
import { Dropbox } from 'dropbox';
import { map, compact } from 'lodash';
import * as multer from 'multer';
import SuccessModel from './successModel';

let upload = multer({ dest: '/tmp' });

const dbx = new Dropbox({ accessToken: process.env.DROPBOX_ACCESS_TOKEN });

import { sendMail } from './email';

const StandUpIndiaRouter = express.Router();

function mapFilesToLinks(files: any, links: any) {
    map(files.entries, (file: any) => {
        dbx.sharingCreateSharedLink({ path: file.path_lower })
            .then((fileMetaData: any) => {
                links.push(fileMetaData.url.split("?")[0] + "?raw=1");
            });
    })
}

// async function fetch(path: string, res: express.Response) {
//     let links: Array<string> = [];
//     let cursor = '';
//     dbx.filesListFolder({ path, limit: 1 })
//         .then((files: any) => {
//             let flag = true;
//             cursor = files.cursor;
//             map(files.entries, (file: any) => {
//                 dbx.sharingCreateSharedLink({ path: file.path_lower })
//                     .then((fileMetaData: any) => {
//                         console.log(fileMetaData)
//                         links.push(fileMetaData.url.split("?")[0] + "?raw=1");
//                         console.log(links);
//                     }).catch((err: Error) => {
//                         return res.status(500).send({
//                             data: err
//                         });
//                     });
//             });
//             console.log(cursor);
//             while (flag) {
//                 dbx.filesListFolderContinue({ cursor })
//                     .then((files: any) => {

//                         map(files.entries, (file: any) => {
//                             if (files.entries.length == 0) {
//                                 flag = false;
//                                 console.log(cursor);
//                                 return res.status(200).send({
//                                     data: links
//                                 });
//                             } else
//                                 dbx.sharingCreateSharedLink({ path: file.path_lower })
//                                     .then((fileMetaData: any) => {
//                                         links.push(fileMetaData.url.split("?")[0] + "?raw=1");
//                                     });
//                         })
//                     })
//                     .catch((err: Error) => {
//                         return res.status(500).send({
//                             data: err
//                         });
//                     });

//             }
//         })
//         .catch((err: Error) => {
//             return res.status(500).send({
//                 data: err
//             });
//         });
// }

function partitionLinks(arr: any, path: string) {
    return compact(map(arr, (file: any) => {
        if (file.path.includes(path))
            return file.url.split("?")[0] + "?raw=1";
    }));
}

function getPics(path: string, res: express.Response) {
    dbx.sharingGetSharedLinks({})
        .then(function(r: any) {
            return res.status(200).send({
                data: partitionLinks(r.links, path)
            });
        })
        .catch((_: any) => {
            return res.status(500).send({
                data: 'Something went wrong'
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
    getPics('success_pics', res);
});

StandUpIndiaRouter.get('/meetings-pics', (_, res: express.Response) => {
    getPics('meetings', res);
});

StandUpIndiaRouter.post('/form', (req: express.Request, res: express.Response) => {
    sendMail(req.body);
    return res.status(200).send({
        data: 'Mail has been sent'
    });
});

function makeLink(path: string, name: string, res: express.Response) {
    let link = '';

    const data = fs.readFileSync(path);

    dbx.filesUpload({
        contents: data,
        path: '/success_upload/' + name,
        mute: true,
        mode: { '.tag': 'add' }
    })
        .then((response: any) => {
            dbx.sharingCreateSharedLink({ path: response.path_lower })
                .then((response2: any) => {
                    console.log(response2.url);
                    return response2.url;
                })
                .catch((err: Error) => {
                    return res.status(500).send({
                        data: err
                    })
                })
        })
        .catch((err: any) => {
            console.log(path, name);
            console.log(err);
            return res.status(500).send({
                data: err
            })
        })

    // });
}

StandUpIndiaRouter.post('/upload', upload.fields([
    { name: 'img' },
    { name: 'vid' }
])
    , (req: express.Request, res: express.Response) => {
        let img = '';
        let r: any = req.files;
        let imgName = r.img[0].filename + "." + r.img[0].mimetype.split('/')[1];
        let vidName = r.vid[0].filename + "." + r.vid[0].mimetype.split('/')[1];

        let imgUrl = '';
        let vidUrl = '';
        const data = fs.readFileSync(r.img[0].path);
        dbx.filesUpload({
            contents: data,
            path: '/success_upload/' + imgName,
            mute: true,
            mode: { '.tag': 'add' }
        })
            .then((response: any) => {
                dbx.sharingCreateSharedLink({ path: response.path_lower })
                    .then((response2: any) => {
                        imgUrl = response2.url;
                        const data = fs.readFileSync(r.vid[0].path);
                        dbx.filesUpload({
                            contents: data,
                            path: '/success_upload/' + vidName,
                            mute: true,
                            mode: { '.tag': 'add' }
                        })
                            .then((response: any) => {
                                dbx.sharingCreateSharedLink({ path: response.path_lower })
                                    .then((response2: any) => {
                                        vidUrl = response2.url;

                                        let successStory = new SuccessModel({
                                            name: req.body.name,
                                            businessName: req.body.businessName,
                                            phone: req.body.phone,
                                            message: req.body.message,
                                            email: req.body.email,
                                            pic: imgUrl,
                                            vid: vidUrl,
                                            businessNature: req.body.businessNature,
                                            firstTime: req.body.firstTime,
                                            location: req.body.location,
                                            place: req.body.place,
                                            pincode: req.body.pincode,
                                            district: req.body.district,
                                            state: req.body.state,
                                            bank: req.body.bank,
                                            year: req.body.year,
                                            loan: req.body.loan,
                                            brief: req.body.brief
                                        })
                                        successStory.save((err: Error) => {
                                            console.log('saddas');
                                            if (err)
                                                return res.status(500).send({
                                                    data: err
                                                });
                                            return res.status(200).send({
                                                data: 'Done here'
                                            });
                                        });

                                    })
                                    .catch((err: Error) => {
                                        return res.status(500).send({
                                            data: err
                                        })
                                    })
                            })
                            .catch((err: any) => {
                                console.log(err);
                                return res.status(500).send({
                                    data: err
                                })
                            })
                    })
                    .catch((err: Error) => {
                        return res.status(500).send({
                            data: err
                        })
                    })
            })
            .catch((err: any) => {
                console.log(err);
                return res.status(500).send({
                    data: err
                })
            })

    });

export default StandUpIndiaRouter;
