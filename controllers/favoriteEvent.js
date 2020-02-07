"use strict"

const {Event} = require('../models')
const {FavoriteEvent} =  require('../models')
const {User} = require('../models')

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

}

module.exports = FavoriteEventController