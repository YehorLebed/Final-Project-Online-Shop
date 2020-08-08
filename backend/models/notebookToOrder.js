const Sequelize = require('sequelize');
const sequelize = require('../util/db.setup');

class NotebookToOrder extends Sequelize.Model { };

NotebookToOrder.init({
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
}, { sequelize, modelName: 'notebookToOrder' });

module.exports = NotebookToOrder;