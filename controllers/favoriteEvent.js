"use strict"

const {Event} = require('../models')
const {FavoriteEvent} =  require('../models')
const {User} = require('../models')
const createError = require('http-errors')

class FavoriteEventController {

    static list(req, res, next){
        console.log(req.user.id)
        User.findByPk(req.user.id, {include: Event})
        .then((result) => {
            console.log(result)
            res.status(200).json(result.Events)
        }).catch((err) => {
            next(err)
        });
    }

    static delete(req, res, next){
        let destroyFavEvent = {
            where: {
                EventId: req.params.id,
                UserId: req.user.id
            }
        }
        User.destroy(destroyFavEvent)
        .then(result => {
            if (result === null) {
            throw createError(404, { message: { error: 'error not found' } })
            } else {
            res.status(200).json(result[0])
            }
        })
        .catch(err => {
            next(err)
        })
    }

}

module.exports = FavoriteEventController