const { User } = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const createError = require('http-errors')
const { OAuth2Client } = require('google-auth-library');
const { createToken } = require("../helpers/jwt")
const client = new OAuth2Client(process.env.CLIENT_ID_GOOGLE);

class UserController {
  static register(req, res, next) {
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

  static edit(req, res, next) {
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
        if (result[0] == 0) {
          res.status()
        } else {
          res.status(200).json(userUpdate)
        }
      })
      .catch(error => {
        next(error)
      })
  }

  static login(req, res, next) {
    const data = {
      where: {
        email: req.body.email
      }
    }
    User.findOne(data)
      .then(user => {
        if (!user) {
          next(createError(404, { message: { error: 'Not Found' } }))
        } else {
          if (bcrypt.compareSync(req.body.password, user.password)) {
            let obj = {
              id: user.id,
              user: user.email
            }
            res.status(200).json({ token: jwt.sign(obj, process.env.JWT_SECRET) })
          } else {
            next(createError(401, { message: { error: 'Not Authorized' } }))
          }
        }
      })
      .catch(err => {
        next(err)
      })
  }

  static loginGoogle(req, res, next) {
    let payload = null
    client.verifyIdToken({
      idToken: req.body.idToken,
      audience: process.env.CLIENT_ID_GOOGLE
    })
      .then((ticket) => {
        payload = ticket.getPayload()
        return User.findOne({
          where: {
            email: payload.email
          }
        })
      })
      .then((user) => {
        if (user) {
          let token = createToken(user)
          res.status(200).json({ user, token })
        } else {
          User.create({
            email: payload.email,
            password: "apaajaboleh",
            fullname: payload.name
          })
            .then((user) => {
              let token = createToken(user)
              res.status(200).json({ user, token })
            })
        }
      })
      .catch(next);
  }
}

module.exports = UserController