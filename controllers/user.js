const {User} = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

class UserController {

  static register(req, res, next){
    let addUser = {
      fullname: req.body.fullname,
      email: req.body.email,
      password: req.body.password
    }

    User.create(addUser)
    .then(result => {
      res.status(200).json(result)
    })
    .catch(error => {
      next(error)
    })
  }

  static edit(req, res, next){
    let userId = {
      where: {
        id: req.params.id
      }
    }

    let userUpdate = {
      fullname: req.body.fullname,
      email: req.body.email,
      password: req.body.password
    }

    User.update(userUpdate, userId)
    .then(result => {
      if (result[0] == 0){
        res.status()
      } else {
        res.status(200).json(userUpdate)
      }
    })
    .catch(error => {
      next(error)
    })
  }

  static login(req, res, next){
    const data = {
      where: {
        email: req.body.email
      }
    }

    User.findOne(data)
    .then(user => {
      console.log(user.email, user.password)
      if (!user){
        throw createError(404, {message: { error: 'Not Found'}})
      } else {
        if (bcrypt.compareSync(req.body.password, user.password)){
          let obj = {
            id: user.id,
            user: user.email
          }
          console.log(obj)
          res.status(200).json({token: jwt.sign(obj, process.env.JWT_SECRET)})
        } else {
          console.log('masuk else')
          throw createError(401, {message: { error: 'Not Authorized'}})
        }
      }
    })
    .catch(err => {
      console.log('masuk catch')
      next()
    })
  }

}

module.exports = UserController