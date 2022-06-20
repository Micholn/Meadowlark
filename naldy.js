var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
   service: 'gmail',
   auth: {
     user: 'mdiagbare@gmail.com',
     pass: '13olympus'
   }
});

var mailOptions = {
  from: 'mdiagbare@gmail.com',
  to: 'adleycraige@gmail.com',
  subject: 'welcome text', 
  text: "it's the node cruise"
};

transporter.sendMail(mailOptions, function(err, info){
  if(err){
    console.log('error');
  } else {
    console.log('email sent:' + info.response);
  }
});