// ORM Sequelize + MySQL
const Sequelize = require('sequelize');
const sequelize = require('../db.setup');

class User extends Sequelize.Model { }
User.init({
  login: Sequelize.STRING,
  password: Sequelize.STRING
}, { sequelize, modelName: 'user' });


module.exports = User;