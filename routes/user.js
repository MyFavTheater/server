const UserRouter = require('express').Router()
const UserController = require('../controllers/user')

UserRouter.post('/register', UserController.register)
UserRouter.put('/update/:id', UserController.edit)
UserRouter.post('/login/google', UserController.loginGoogle)

module.exports = UserRouter