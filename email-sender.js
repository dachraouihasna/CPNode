var nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'dachhassna@gmail.com',
        pass: 'lotfi1508'
    }
});

let mailOptions = {
    from: 'dachhassna@gmail.com',
    to: 'farahbenothman2@gmail.com',
    subject: 'Sending email using node.js',
    text: 'That was easy'
};

transporter.sendMail(mailOptions, function(err, data){
    if (err) {
        console.log('error');
    
    }
    else {
        console.log('Email sent successfully');
    }
});