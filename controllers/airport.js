const {getAirport} = require("../helpers/airportsFinder")
const createError = require('http-errors')
    class AirportController{
        static findAirport(req, res, next){
            const {longitude, latitude} = req.body
            getAirport(longitude, latitude)
            .then((response)=>{
                if (response.data.length === 0) {
                    throw createError(404, {message: { error: 'Not Found'}})
                }else{
                    const dataAirport = {
                            code : response.data[0].code,
                            name : response.data[0].name,
                            city : response.data[0].city,
                            countryCode : response.data[0].countryCode
                        }
                    res.status(200).json(dataAirport)
                }
            })
            .catch((error)=>{
                next(error)
            })
        }
    }
module.exports = AirportController