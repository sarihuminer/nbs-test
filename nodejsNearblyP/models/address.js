
const Sequelize = require('sequelize');
const database = require('../config/db');

const Address = database.db.define('NBCTest', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
    },
    search_string: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    name_place: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    address_place: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    count: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 1,
    },
});
database.db.sync({ force: true })
    .then(() => Address.create({
        search_string: "פיצה רבי עקיבא 68 בני ברק",
        name_place: "פיצה מקס",
        address_place: "רבי עקיבא 68",
    }).then((user) => {
        console.log(user);
    }));

module.exports = Address;