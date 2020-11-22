
const Sequelize = require('sequelize');
const database = require('../config/db');

const Address = database.db.define('NBCTest', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
    },
    search_place: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    result_place1: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    result_name1: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    result_place2: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    result_name2: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    result_place3: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    result_name3: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    result_place4: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    result_name4: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    result_place5: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    result_name5: {
        type: Sequelize.STRING,
        allowNull: true,
    },
});
database.db.sync({ force: true })
    .then(() => Address.create({
        search_place: "בית קפה בבני ברק",
        result_place1: "רבי עקיבא 80",
        result_name1: "קפה פרידמן",
        result_place2: "רבי עקיבא 85",
        result_name2: "cofix",
        result_place3: "בן גוריון 30",
        result_name3: "caffe caffe",
    }).then((user) => {
        console.log(user);
    }));

module.exports = Address;