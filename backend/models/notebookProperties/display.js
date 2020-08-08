const Sequelize = require('sequelize');
const sequelize = require('../../util/db.setup');

class Display extends Sequelize.Model { };
Display.init({
  resolution: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  diagonal: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: { min: 12.0, max: 20.0 }
  },
  matrix: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  grade: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: { min: 0, max: 10 }
  }
}, { sequelize, modelName: 'display' });

module.exports = Display;