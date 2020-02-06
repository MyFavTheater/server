const axios = require("axios");

const getAirport = (longitude, latitude) => {
    return axios({
        "method":"GET",
        "url":"https://cometari-airportsfinder-v1.p.rapidapi.com/api/airports/by-radius",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"cometari-airportsfinder-v1.p.rapidapi.com",
        "x-rapidapi-key":"49b5266130mshf2fa541a0ac1761p13b5b7jsnbcbbff59df42"
        },"params":{
            "radius": `20`,
            "lng":  `${longitude}`,
            "lat": `${latitude}`
        }
        })
}
module.exports = {getAirport}