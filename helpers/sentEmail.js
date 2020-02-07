if (process.env.NODE_ENV == 'development'){
    require('dotenv').config()
}

function sentEmail(email, title, performers, date, location, link){
    const sgMail = require('@sendgrid/mail');
    const template = require('./email')
    sgMail.setApiKey(process.env.API_KEY);
    // const titleUC = title.toUpperCase()
    // const descriptionUC = description.toUpperCase()
    const msg = {
        to: `fajrin.noorrachman11@gmail.com`,
        from: `fajrinpgrm@gmail.com`,
        subject: 'My Favorite Theater',
        text: `Add Event to Favorite`,
        html: template(title, performers, date, location, link)
    };
    sgMail.send(msg);
}


// `<strong>You just add ${title} to your favorite Event.
//         Performers: ${performers}
//         Date: ${date}
//         at: ${location}
//         Thankyou:)
//         </strong>`

module.exports = sentEmail