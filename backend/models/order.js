const Sequelize = require('sequelize');
const sequelize = require('../db.setup');

const { GoodToOrder } = require('./');

class Order extends Sequelize.Model {
  get goods() {
    if (this.__goods) return this.__goods;
    const goods = this.getGoods();
    const goodToOrderList = goods.map(good => {
      const goodToOrder = good.goodToOrder;
      goodToOrder.name = good.name;
      goodToOrder.id = goodToOrder.goodId;
      return goodToOrder
    });
    this.goods = goodToOrderList;
    return this.goods;
  }

  set goods(goods) {
    this.__goods = goods;
  }

  get total() {
    const total = this.goods.reduce((prev, { price, quantity }) => prev += price * quantity, 0);
    return total;
  }
};
Order.init({
  name: Sequelize.STRING,
  phone: Sequelize.STRING,
  email: Sequelize.STRING,
  address: Sequelize.STRING,
}, { sequelize, modelName: 'order' });


module.exports = Order;