import * as nodemailer from 'nodemailer';

let selfSignedConfig = {
    host: 'smtp-mail.outlook.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD
    },
    tls: {
        rejectUnauthorized: false,
        ciphers: 'SSLv3'
    }
};

let transporter = nodemailer.createTransport(selfSignedConfig);

interface Idetails {
    name: string;
    email: string;
    phone: string;
    message: string;
}

export function sendMail(details: Idetails) {

    let messageOptions = {
        from: process.env.EMAIL_ADDRESS,
        to: process.env.TO_EMAIL,
        subject: 'StandUpIndia Loans - ' + details.name,
        text: `
Name: ${details.name},
Email: ${details.email},
phone: ${details.phone},
Message: ${details.message}
`,
        html: `
<h3>Name: ${details.name}<h3>,
<h3>Email: ${details.email}</h3>,
<h3>phone: ${details.phone}</h3>,
<h3>Message: ${details.message}</h3>
`
    };

    transporter.sendMail(messageOptions, (error: Error, info) => {
        if (error) {
            console.log(error);
            return false;
        }
        console.log(info);
        return true;
    });
}
