"use strict"

const axios = require('axios')
const {Event} = require('../models')

class seatgeekController {
    static addEventFromAPI(req, res, next) {
        let EventData = []
        axios
            .get(`https://api.seatgeek.com/2/events?client_id=${process.env.TOKEN_SEATGEEK}`)
            .then(({ data }) => {
                let dataEvent = {}
                const arr = []
                data.events.forEach(el => {
                    dataEvent.title = el.title
                    dataEvent.announce_date= el.announce_date
                    dataEvent.type= el.type
                    dataEvent.performersName= el.performers[0].name
                    dataEvent.performersImage= el.performers[0].image
                    dataEvent.url= el.url
                    dataEvent.lat= el.venue.location.lat
                    dataEvent.lon= el.venue.location.lon
                    EventData.push(dataEvent)
                    arr.push(Event.create(dataEvent))
                    dataEvent = {}
                })
                Promise.all(arr)
            })
            .then(result => {
                res.status(200).json(EventData)
            })
            .catch(next);
    }

}

module.exports = seatgeekController