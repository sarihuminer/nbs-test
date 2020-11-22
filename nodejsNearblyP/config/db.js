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
//add to db
function add(search, name, place) {
    // db.sync({ force: false })
    //     .then(() => Add.create({
    //         search_string: search,
    //         name_place: name,
    //         address_place: place,
    //     }).then((user) => {
    //         console.log(user);
    //     }));
}

module.exports.db = db;
module.exports.testDb = testDb;
module.exports.add = add;