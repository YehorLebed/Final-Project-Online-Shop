// ORM Sequelize + MySQL
const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:16324@localhost/online_store');

class User extends Sequelize.Model { }
User.init({
  login: Sequelize.STRING,
  password: Sequelize.STRING
}, { sequelize, modelName: 'user' });


module.exports = User;


sequelize.sync();