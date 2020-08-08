const Sequelize = require('sequelize');
const sequelize = require('../util/db.setup');

class Order extends Sequelize.Model {
  // get goods() {
  //   if (this.__goods) return this.__goods;
  //   const goods = this.getGoods();
  //   const goodToOrderList = goods.map(good => {
  //     const goodToOrder = good.goodToOrder;
  //     goodToOrder.name = good.name;
  //     goodToOrder.id = goodToOrder.goodId;
  //     return goodToOrder
  //   });
  //   this.goods = goodToOrderList;
  //   return this.goods;
  // }

  // set goods(goods) {
  //   this.__goods = goods;
  // }

  // get total() {
  //   const total = this.goods.reduce((prev, { price, quantity }) => 
  //   prev += price * quantity, 0);
  //   return total;
  // }

  get user() {
    if (this.__user) return this.__user;
    const user = this.getUser();
    this.user = user;
    return user;
  }
  set user(user) {
    this.__user = user;
  }
};

Order.init({
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { isIn: ['pending', 'resolved', 'rejected'] }
  }
}, { sequelize, modelName: 'order' });


module.exports = Order;