
const Places = require('google-places-web');
var express = require('express');
var router = express.Router();
const db = require('./config/db');
const Add = require('./models/address');
const request = require('request');
const { update } = require('./models/address');
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

    //check if there is data
    valuesFromDB = search(req.params["mySearchP"]);
    if (valuesFromDB != null) {
        updateDetails(req.params["mySearchP"], valuesFromDB);
        //res.send(valuesFromDB);
    }
    request(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodedURI}&radius=12&key=AIzaSyBxvqGxEvb6ZBnyRTM8isBU_6O-MAfuNiQ&language =iw`
        , function (error, response, body) {
            if (body != null) {
                jsonBody = JSON.parse(body);
                //save in db
                jsonBody = jsonBody.results.slice(0, 5);
                for (var adress of jsonBody) {
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
//add data
function add(str, name, place) {
    Add.create({
        search_string: str,
        name_place: name,
        address_place: place,
    })
}

//search if there is data
function search(str) {
    return Add.findAll({
        where: {
            search_string: str
        }
    });
}

//update if there is data
function updateDetails(str, valuesFromDB) {
    Add.update({
        count: valuesFromDB + 1
    }, {
        where: {
            search_string: str
        }
    })
}

module.exports = router;