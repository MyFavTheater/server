if (process.env.NODE_ENV == 'development'){
    require('dotenv').config()
}

function sentEmail(email, title, performers, date, location){
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.API_KEY);
    const template = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
            <title>My Favorite Events</title>
        </head>
        <body>
            <div class="container">
                <div class="row">
                  <div class="col">
                    
                  </div>
                  <div class="col-8" style="text-align: justify; background-color: #1277F7;" class="img-thumbnail">
                    <h1  style="text-align: center;"><strong>My Favorite Theater</strong></h1>
                    <center>
                        <img src="https://seatgeek.com/images/performers-landscape/hugo-turenne-c96644/727337/huge.jpg" style="border-radius: 20%;">
                    </center>
                    <div class="container">
                        <br>
                        <ul class="list-group" style="text-align: center;">
                            <li class="list-group-item"><strong>You have success add Event to youre <strong style="color: lightseagreen;">MyFavoriteEvents</strong></strong></li>
                            <li class="list-group-item"><strong>Title</strong>  <pre>${title}</pre></li>
                            <li class="list-group-item"><strong>Artist</strong>  <pre>${performers}</pre></li>
                            <li class="list-group-item"><strong>Date</strong> <pre>${date}</pre></li>
                            <li class="list-group-item"><strong>Location</strong> <pre>${location}</pre></li>
                            <div style="text-align: center; background-color: #1277F7;">
                                <H5 class="list-group-item list-group-item-action active">MyFavoriteEvents</H5>
                            </div>
                          </ul>
                    </div>
                  </div>
                  <div class="col">
        
                  </div>
                </div>
            </div>
        </body>
        </html>`
    const msg = {
        to: `${email}`,
        from: `fajrinpgrm@gmail.com`,
        subject: 'My Favorite Theater',
        text: `Add Event to Favorite`,
        html: template,
    };
    sgMail.send(msg);
}

module.exports = sentEmail