const {getAirport} = require("../helpers/airportsFinder")
    class AirportController{
        findAirport(req, res, next){
            getAirport()
            .then((response)=>{
                if (response.length === 0) {
                    throw createError(404, {message: { error: 'Not Found'}})
                }else{
                    const dataAirport = {
                            code = response[0].code,
                            name = response[0].name,
                            city = response[0].city,
                            countryCode = response[0].countryCode
                        }
                    res.status(200).json(dataAirport)
                }

            })
            .catch((error)=>{
                // console.log(error)
                next(error)
            })
        }
    }
module.exports = AirportController