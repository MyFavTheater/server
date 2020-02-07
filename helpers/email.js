const template = function(title, performers, date, location, link){
 return `<!DOCTYPE html>
 <html lang="en">
 <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <meta http-equiv="X-UA-Compatible" content="ie=edge">
     <title>My Favorite Events</title>
 </head>
 <body style="background-image: url(./bgemail.jpg);">
     <div class="container" style="background-image:url() ;">
         <div class="row">
           <div class="col-8" style="text-align: justify; ;" class="img-thumbnail">
             <h1  style="text-align: center;"><strong>My Favorite Theater</strong></h1>
             <center>
                 <img src="${link}" style="border-radius: 20%;">
             </center>
             <div class="container" style="background-color: rgb(202, 202, 202); border-radius: 10%;">
                 <br>
                 <ul class="list-group" style="text-align: center;  list-style-type: none;">
                     <li class="list-group-item"><strong>You have success add Event to youre <strong >MyFavoriteEvents</strong></strong></li>
                     <li class="list-group-item"><strong>Title</strong>  <pre>${title}</pre></li>
                     <li class="list-group-item"><strong>Artist</strong>  <pre>${performers}</pre></li>
                     <li class="list-group-item"><strong>Date</strong> <pre>${date}</pre></li>
                     <li class="list-group-item"><strong>Location</strong> <pre>${location}</pre></li>
                     <div style="text-align: center;">
                         <H5 class="list-group-item list-group-item-action active">MyFavoriteEvents</H5>
                     </div>
                   </ul>
             </div>
           </div>
         </div>
     </div>
 </body>
 </html>`
}
module.exports = template
