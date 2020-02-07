const AirportRouter = require('express').Router()
const AirportController = require('../controllers/airport')

AirportRouter.get('/', AirportController.findAirport)

module.exports = AirportRouter