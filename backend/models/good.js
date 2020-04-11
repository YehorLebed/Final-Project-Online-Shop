const Sequelize = require('sequelize');
const sequelize = require('../db.setup');

class Good extends Sequelize.Model { };
Good.init({
  name: Sequelize.STRING,
  description: Sequelize.TEXT,
  price: Sequelize.FLOAT
}, { sequelize, modelName: 'good' });

module.exports = Good;