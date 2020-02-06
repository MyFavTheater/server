"use strict"

const axios = require('axios')

class seatgeekController {
    static findAll(req, res, next) {
        axios
            .get(`https://api.seatgeek.com/2/events?client_id=${process.env.TOKEN_SEATGEEK}`)
            .then(({ data }) => {
                const arr = []
                let perform = []
                data.events.forEach(el => {
                    perform.push({
                        name: el.performers[0].name,
                        image: el.performers[0].image
                    })
                    arr.push({
                        title: el.title,
                        announce_date: el.announce_date,
                        type: el.type,
                        performers: perform,
                        url: el.url,
                        venue: el.venue.location
                    })
                    perform = []
                });
                res.status(200).json(arr)
            }).catch(next);
    }
}

module.exports = seatgeekController