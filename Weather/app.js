const request = require('request')


const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiamV5YW0iLCJhIjoiY2twMm96eXAzMDM2YjJvczVzZXZtazUzNiJ9.FaHlDWTYHsHT2ycPPszsMw&limit=1'

request({url: url, json: true}, (error, response) =>
{
    console.log(response.body.features[0].center)
})