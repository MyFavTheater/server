"use strict"

const {Event} = require('../models')

class EventController {

    static list(req, res, next){
        Event.findAll()
        .then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            next(err)
        });
    }

}

module.exports = EventController