"use strict"

const axios = require('axios')

class seatgeekController {
    static findAll(req, res, next) {
        axios
            .get(`https://api.seatgeek.com/2/events?client_id=${process.env.TOKEN_SEATGEEK}`)
            .then(({ data }) => {
                const arr = []
                data.events.forEach(el => {
                    arr.push({
                        title: el.title,
                        announce_date: el.announce_date,
                        type: el.type,
                        performersName: el.performers[0].name,
                        performersImage: el.performers[0].image,
                        url: el.url,
                        lat: el.venue.location.lat,
                        lon: el.venue.location.lon
                    })
                });
                res.status(200).json(arr)
            }).catch(next);
    }
}

module.exports = seatgeekController