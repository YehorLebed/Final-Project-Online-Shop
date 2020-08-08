const Sequelize = require('sequelize');
const sequelize = require('../../util/db.setup');

class Battery extends Sequelize.Model { };
Battery.init({
  capacity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: { min: 1000 }
  },
  time: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: { min: 1, max: 24 }
  },
  grade: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: { min: 0, max: 10 }
  }
}, { sequelize, modelName: 'battery' });

module.exports = Battery;