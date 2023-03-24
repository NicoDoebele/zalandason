import nodemailer from "nodemailer"

require("dotenv").config()

export async function sendMail(subject: string, recipients: any, sender: string, body: {text: string, html: string}) {

    let transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: Number(process.env.MAIL_PORT),
        secure: Boolean(process.env.MAIL_SECURE),
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
        },
    });
    
    let info = await transporter.sendMail({
        from: sender,
        to: recipients,
        subject: subject,
        text: body.text,
        html: body.html
    });
}