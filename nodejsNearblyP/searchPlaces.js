
const Places = require('google-places-web');
var express = require('express');
var router = express.Router();
const db = require('./config/db');
const Add = require('./models/address');
const request = require('request');
fs = require('fs');
// instance of GooglePlaces Class;
Places.apiKey = "AIzaSyBxvqGxEvb6ZBnyRTM8isBU_6O-MAfuNiQ";

// Places.debug = true; // boolean;

router.get('/all', function (req, res) {
    debugger;
    Add.findAll().then(a => { console.log(a), res.send(a); }).catch(err => { console.log(err); res.send("error") });


})

router.get('/:mySearchP', function (req, res) {
    myQuery = "";
    debugger;
    myQuery = req.params["mySearchP"].split(" ").join("+");
    const encodedURI = encodeURI(myQuery)
    console.log("mySearchP");
    request(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodedURI}&radius=12&key=AIzaSyBxvqGxEvb6ZBnyRTM8isBU_6O-MAfuNiQ&language =iw`
        , function (error, response, body) {
            if (body != null) {
                jsonBody = JSON.parse(body);
                //save in db

                for (var adress of jsonBody.results) {
                    add(req.params["mySearchP"], adress.name, adress.formatted_address);
                }
                res.send(body);
            }
            else {
                res.send("error!");
            }


            console.error('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log('body:', body); // Print the HTML for the Google homepage.
        });

})
function add(str, name, place) {
    Add.create({
        search_string: str,
        name_place: name,
        address_place: place,
    })
}

module.exports = router;