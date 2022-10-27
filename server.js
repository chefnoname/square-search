const express = require('express');
const path = require("path");
const app = express();

// Allow cross-origin
const cors = require('cors');
app.use(cors());

app.use(express.json());

// access environmental variables
require('dotenv').config();

const port = process.env.PORT || 5000;

// const { createProxyMiddleware } = require('http-proxy-middleware');

//   app.use(
//     '/api',
//     createProxyMiddleware({
//       target: `http://localhost:${port}`,
//       changeOrigin: true,
//     })
//   );

// make the contact page the the first page on the app
// app.route("/").get(function (req, res) {
//     res.sendFile(process.cwd() + "/frontend/public/index.html");
//   });


// app.use("/public", express.static(process.cwd() + "/public")); //make public static

// https://lo-victoria.com/how-to-build-a-contact-form-with-javascript-and-nodemailer
const nodemailer = require("nodemailer");
const multiparty = require("multiparty");

const transporter = nodemailer.createTransport({
    host: `smtp.gmail.com`,
    port: 587,
    auth: {
    //   https://stackoverflow.com/questions/45478293/username-and-password-not-accepted-when-using-nodemailer
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
    });
  
  // verify connection configuration
  transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });

  app.post("/send", (req, res) => {
    let form = new multiparty.Form();
    let data = {};
    form.parse(req, function (err, fields) {
      Object.keys(fields).forEach(function (property) {
        data[property] = fields[property].toString();
      });
      console.log(data);
      const mail = {
        sender: `${data.name} <${data.email}>`,
        to: process.env.EMAIL, // receiver email,
        subject: data.subject,
        text: `${data.name} <${data.email}> \n${data.message}`,
      };
      transporter.sendMail(mail, (err, data) => {
        if (err) {
          console.log(err);
          res.status(500).json("Something went wrong.");
        } else {
          res.status(200).json("Email successfully sent to recipient!");
        }
      });
    });
  });

app.get('/', (req, res) => {
    res.send('Welcome to the backend!')
    })
    
    
app.get('/api', (req, res) => {
        res.json({users: ['user1', 'user2', 'user3']})
        })

app.listen(port, () => {
    console.log(`Express server started on port ${port}`);
})