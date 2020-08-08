const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:16324@localhost/online_store_v2');
module.exports = sequelize;