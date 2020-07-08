const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const nodemailer = require('nodemailer');
// const sendEmail = require('../utils/sendEmail');

exports.sendMail = asyncHandler(async (req, res, next) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.G_EMAIL, // generated ethereal user
      pass: process.env.G_PASSWORD // generated ethereal password
    }
  });

  // send mail with defined transport object
  const message = {
    from: process.env.G_EMAIL, // sender address
    to: process.env.G_EMAIL_RECEIVER, // list of receivers
    cc: req.body.from, // list of Cc
    subject: req.body.subject, // Subject line
    html: `<h3>Hi, I'm ${req.body.name}</h3>
          <p>${req.body.message}</p>
          <br/>
          <p>Thank you</p>`
  };

  const info = await transporter.sendMail(message, function(error, info) {
    if (error) {
      return next(new ErrorResponse(`Email could not be sent`, 500));
    } else {
      res.status(200).json({
        info,
        data: 'Email Sent!',
      })
    }
  });
});