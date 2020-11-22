
const Places = require('google-places-web');
var express = require('express');
var router = express.Router();
const db = require('./config/db');
const Add = require('./models/address');

// instance of GooglePlaces Class;
Places.apiKey = "AIzaSyBxvqGxEvb6ZBnyRTM8isBU_6O-MAfuNiQ";

// Places.debug = true; // boolean;

router.get('/all', function (req, res) {
    debugger;
    Add.findAll().then(a => { console.log(a), res.send(a); }).catch(err => { console.log(err); res.send("error") });


})


router.get('/:mySearchP', function (req, res) {
    console.log("mySearchP")

    try {
        const response = Places.nearbysearch({
            location: "-37.814,144.96332", // LatLon delimited by ,
            // radius: "500",  // Radius cannot be used if rankBy set to DISTANCE
            type: [], // Undefined type will return all types
            rankby: "distance" // See google docs for different possible values
        });
        res.send(response);
        const { status, results, next_page_token, html_attributions } = response;
    } catch (error) {
        console.log(error);
    }
    debugger;

})

router.get('', function (req, res) {

})



module.exports = router;