const Sequelize = require('sequelize');
const sequelize = require('../db.setup');

class GoodToOrder extends Sequelize.Model {
  get goods() {
    return this.getGoods();
  }

  get quantity() {
    return this.quantity;
  }
};

GoodToOrder.init({
  price: Sequelize.FLOAT,
  quantity: Sequelize.INTEGER
}, { sequelize, modelName: 'goodToOrder' });

module.exports = GoodToOrder;