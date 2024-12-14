require('dotenv').config();

const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const sendEmail = async (to, subject, text, html) => {
    const msg = {
        to,        
        from: 'em203.malikhan',
        subject,
        text,
        html,
    };

    try {
        const msg = {
          to: 'recipient@example.com',
          from: 'em203.malikhan',
          subject: 'Test Email',
          text: 'This is a test email.',
        };
      
        await sgMail.send(msg);
        console.log('Email sent successfully');
      } catch (error) {
        console.error('Error sending email:', error.response.body.errors);
      }
      
};

module.exports = sendEmail;
