const Sequelize = require('sequelize');
const sequelize = require('../../util/db.setup');

class ROM extends Sequelize.Model { };
ROM.init({
  capacity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: { min: 128 }
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { isIn: [['SSD', 'HDD']] }
  },
  grade: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: { min: 0, max: 10 }
  }
}, { sequelize, modelName: 'rom' });

module.exports = ROM;