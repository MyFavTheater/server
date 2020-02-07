"use strict"

const route = require('express').Router()
const FavoriteEventController = require('../controllers/favoriteEvent')

route.get('/', FavoriteEventController.list)
route.delete('/:id', FavoriteEventController.delete)

module.exports = route