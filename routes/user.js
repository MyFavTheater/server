const UserRouter = require('express').Router()
const UserController = require('../controllers/user')

UserRouter.post('/register', UserController.register)
UserRouter.put('/update/:id', UserController.edit)

module.exports = UserRouter