"use strict"

const {Event} = require('../models')
const {FavoriteEvent} =  require('../models')
const sentEmail = require('../helpers/sentEmail')

class EventController {

    static list(req, res, next){
        Event.findAll()
        .then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            next(err)
        });
    }

    static addFavorite(req, res, next){
        let favoriteData = {
            UserId: req.user.id,
            EventId: req.params.id
        }
        FavoriteEvent.create(favoriteData)
        .then(result => {
            return Event.findOne({where: {id: favoriteData.EventId}})
        })
        .then(result => {
            sentEmail(req.user.user, result.title, result.performersName, result.announce_date, result.city)
            res.send(result)
        })
        .catch(err => {
            next(err)
        })
    }


}

module.exports = EventController