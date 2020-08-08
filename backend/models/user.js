const Sequelize = require('sequelize');
const sequelize = require('../util/db.setup');

class User extends Sequelize.Model { }
User.init({
  login: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  role: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { isIn: ['customer', 'admin'] }
  }
}, { sequelize, modelName: 'user' });


module.exports = User;