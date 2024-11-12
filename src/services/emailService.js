const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendEmail = (from, to, subject, text, replyTo) => {
  const mailOptions = {
    from: from,
    to: to,
    subject: subject,
    text: text,
    replyTo: replyTo,
  };

  return transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };
