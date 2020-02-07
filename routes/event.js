"use strict"

const route = require('express').Router()
const EventController = require('../controllers/event')

route.get('/', EventController.list)
route.post('/:id', EventController.addFavorite)

module.exports = route