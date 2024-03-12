require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.SENDER,
      pass: process.env.APP_PW//"kral zesm zueb famc",
    },
});

module.exports = transporter;