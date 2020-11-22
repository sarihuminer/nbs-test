
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
    myQuery = req.params["mySearchP"].split(" ").join("+");
    const encodedURI = encodeURI(myQuery)
    console.log("mySearchP");
    request(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodedURI}&radius=12&key=AIzaSyBxvqGxEvb6ZBnyRTM8isBU_6O-MAfuNiQ&language =iw`
        , function (error, response, body) {
            if (body != null) {
                res.send(body);
            }
            else {
                res.send("error!");
            }
            // fs.writeFile('response.json', body);

            console.error('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log('body:', body); // Print the HTML for the Google homepage.
        });

})

// router.get('/:mySearchP', function (req, res) {
//     console.log("mySearchP")
//     request('https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=AIzaSyBxvqGxEvb6ZBnyRTM8isBU_6O-MAfuNiQ'
//         , function (error, response, body) {
//             console.error('error:', error); // Print the error if one occurred
//             console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//             console.log('body:', body); // Print the HTML for the Google homepage.
//         });

// })

// router.get('/:mySearchP', function (req, res) {
//     console.log("mySearchP")
//     request('https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key= AIzaSyBxvqGxEvb6ZBnyRTM8isBU_6O-MAfuNiQ'
//         , function (error, response, body) {
//             console.error('error:', error); // Print the error if one occurred
//             console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//             console.log('body:', body); // Print the HTML for the Google homepage.
//         });

// })

// router.get('/:mySearchP', function (req, res) {
//     console.log("mySearchP")

//     try {
//         const response = Places.nearbysearch({
//             location: "-37.814,144.96332", // LatLon delimited by ,
//             // radius: "500",  // Radius cannot be used if rankBy set to DISTANCE
//             type: [], // Undefined type will return all types
//             rankby: "distance" // See google docs for different possible values
//         });
//         res.send(response);
//         const { status, results, next_page_token, html_attributions } = response;
//     } catch (error) {
//         console.log(error);
//     }
//     debugger;

// })





module.exports = router;