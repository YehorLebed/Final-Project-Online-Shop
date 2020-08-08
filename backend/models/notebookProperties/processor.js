const Sequelize = require('sequelize');
const sequelize = require('../../util/db.setup');

class Processor extends Sequelize.Model { };
Processor.init({
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  frequency: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: { min: 1.0, max: 5.0 },
  },
  grade: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: { min: 0, max: 10 }
  }
}, { sequelize, modelName: 'processor' });

module.exports = Processor;