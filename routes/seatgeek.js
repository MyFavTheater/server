"use strict"

const route = require('express').Router()
const seatgeekController = require('../controllers/Seatgeek')

route.get('/', seatgeekController.addEventFromAPI)

module.exports = route