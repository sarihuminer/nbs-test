
var express = require('express');
var app = express();
var cors = require('cors')
app.use(cors())
var searchPlaces = require('./searchPlaces');
var db = require('./config/db');

app.listen(3000, function () {
    console.log("app listening on port 3000");
});

// db connection
const database = db.db;
// test db
db.testDb();

app.get('/', function (req, res) {
    res.send("hello world");
})
app.use('/search', searchPlaces);