const ContactUs = require('../Models/HP');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
var randomstring = require("randomstring");

module.exports = {
    HomePage:(req,res)=>{
        res.render('index')
    },
    contactUs:(req,res)=>{
        const {fname,lname,email,phone,txtArea} = req.body;

        const newMsg = new ContactUs({
            _id:mongoose.Types.ObjectId(),
            fName:fname,
            lName:lname,
            Email:email,
            Phone:phone,
            txtArea:txtArea
        });
        newMsg.save();
        const i = randomstring.generate(8);
        let mailTransporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'asidoasif@gmail.com',
                pass: process.env.EMAIL_PASS
            }
        });
        let mailDetails = {
            from: 'asidoasif@gmail.com',
            to: 'danielrevest4@gmail.com',
            subject:`${i}מתעניין חדש`,
            text: `Name:${fname+" "+lname},
                   Email:${email},
                   Phone:${phone}
                   TextArea:${txtArea}`
        };
         
        mailTransporter.sendMail(mailDetails, function(err, data) {
            if(err) {
                console.log(err);
            } else {
                console.log('Email sent to'+" "+Email);
            }
        });

        return res.redirect('/');
    }
}