if (process.env.NODE_ENV == 'development') {
    require('dotenv').config()
}
const jwt = require("jsonwebtoken")

module.exports = (req, res, next) => {
    try {
        const token = req.headers.token
        const user = jwt.verify(token, process.env.JWT_SECRET)
        req.user = user
        next()
    } catch (error) {
        next(error)
    }
}