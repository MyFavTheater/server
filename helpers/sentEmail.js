if (process.env.NODE_ENV == 'development'){
    require('dotenv').config()
}

function sentEmail(email, title, performers, date, location){
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.API_KEY);
    // const titleUC = title.toUpperCase()
    // const descriptionUC = description.toUpperCase()
    const msg = {
        to: `${email}`,
        from: `fajrinpgrm@gmail.com`,
        subject: 'My Favorite Theater',
        text: `Add Event to Favorite`,
        html: `<strong>You just add ${title} to your favorite Event.
        Performers: ${performers}
        Date: ${date}
        at: ${location}
        Thankyou:)
        </strong>`,
    };
    sgMail.send(msg);
}

module.exports = sentEmail