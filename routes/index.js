"use strict"

const router = require("express").Router()
const UserRouter = require('./user')
const EventRouter = require('./event')
const UserController = require('../controllers/user')
const authenticaton = require('../middleware/authentication')
const AirportRouter = require('./airport')
const seatgeekRouter = require('./seatgeek')
const FavoriteRouter = require('../routes/favorite')

router.post('/login', UserController.login)
router.use('/users', UserRouter)
router.use('/airport', AirportRouter)
router.use('/seatgeek', seatgeekRouter)
router.use(authenticaton)
router.use('/event', EventRouter)
router.use('/favorite', FavoriteRouter)

module.exports = router