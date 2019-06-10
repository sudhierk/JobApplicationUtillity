const nodemailer=require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
           user: 'sudhir.kadam.085@gmail.com',
           pass: 'your password goes here'
       }
   });

exports.SendEmailNotification=function(emailItem){
    
       const mailOptions = {
        from: 'sudhir.kadam.085@gmail.com', // sender address
        to: emailItem, // list of receivers
        subject: '.Net Fullstack/MEAN Stack/Blockchain Consultant', // Subject line
        attachments:
                   {   // file on disk as an attachment
                       filename: 'sudhirKadam.docx',
                       path: '././SudhirNKadam Resume.docx' // stream this file
                   },
        html: { path: './mailBody.html' } // plain text body
      };
    
      transporter.sendMail(mailOptions, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info);
     });
};


