"use strict"

const route = require('express').Router()
const EventController = require('../controllers/event')

route.get('/', EventController.list)
route.get('/:id', EventController)

module.exports = route