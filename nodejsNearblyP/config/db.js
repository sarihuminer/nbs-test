const { Sequelize } = require('sequelize');
// const Add = require('../models/address');
// connect to db
const db = new Sequelize('NBCTest', 'postgres', 'sms0548598227', {
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },


});
// //add data
// function add(str, name, place) {
//     Add.create({
//         search_string: str,
//         name_place: name,
//         address_place: place,
//     })
// }

//test db
function testDb() {
    db.authenticate()
        .then(function (err) {
            console.log('Connection has been established successfully.');
        })
        .catch(function (err) {
            console.log('Unable to connect to the database:', err);
        });
}

module.exports.db = db;
module.exports.testDb = testDb;
// module.exports.add=add;