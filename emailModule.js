const nodemailer=require('nodemailer');

exports.SendEmailNotification=function(){
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
               user: 'sudhir.kadam.085@gmail.com',
               pass: 'yourpassword'
           }
       });
    
       const mailOptions = {
        from: 'sudhir.kadam.085@gmail.com', // sender address
        to: 'sudhirsweet007@gmail.com', // list of receivers
        subject: 'Test Email Subject', // Subject line
        html: '<p>Your html here</p>'// plain text body
      };
    
      transporter.sendMail(mailOptions, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info);
     });
};


