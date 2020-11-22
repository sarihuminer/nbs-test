const { Sequelize } = require('sequelize');

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
