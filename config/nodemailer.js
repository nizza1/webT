import nodemailer from 'nodemailer';

const chrisMail = 'C.bohdan@nuancestudio.de';
const nizMail = 'nizardjassim@gmail.com';
const email = process.env.EMAIL;
const pass= process.env.EMAIL_PASS;

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: email,
        pass,
    }
});

export const mailOptions = {
    from : email,
    to : [email , chrisMail],
};