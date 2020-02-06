"use strict"

const router = require("express").Router()
const UserRouter = require('./user')
const UserController = require('../controllers/user')
const authenticaton = require('../middleware/authentication')
const seatgeekRouter = require('./seatgeek')

// router.get('/test', (req, res, next) => res.status(200).json({ message: 'ok' }));
router.post('/login', UserController.login)
router.use('/user', UserRouter)
// router.use(authenticaton)
router.use('/seatgeek', seatgeekRouter)

module.exports = router