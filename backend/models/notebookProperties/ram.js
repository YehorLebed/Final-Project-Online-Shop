const Sequelize = require('sequelize');
const sequelize = require('../../util/db.setup');

class RAM extends Sequelize.Model { };
RAM.init({
  capacity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: { min: 1028 }
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { isIn: [['DDR3', 'DDR4', 'DDR5']] }
  },
  grade: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: { min: 0, max: 10 }
  }
}, { sequelize, modelName: 'ram' });

module.exports = RAM;