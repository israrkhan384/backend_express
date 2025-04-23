const nodemailer = require('nodemailer');

const sendmail = async (to, subject, text, html) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,  // Your Gmail address
            pass: process.env.EMAIL_PASSWORD   // Your Gmail App Password
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject,
        text,
        html
    };

    await transporter.sendMail(mailOptions);
};

module.exports = sendmail;  // ✅ Correct export
