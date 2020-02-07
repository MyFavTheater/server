"use strict"

const {Event} = require('../models')
const {FavoriteEvent} =  require('../models')
const {User} = require('../models')

class FavoriteEventController {

    static list(req, res, next){
        
        User.findByPk(req.user.id, {include: Event})
        .then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            next(err)
        });
    }

}

module.exports = FavoriteEventController