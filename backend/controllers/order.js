const { Order, User, Good } = require('../models');

const orderControllers = {

  async getOrders() {
    const orders = await Order.findAll();
    if (!orders) throw new Error('No orders found');
    return orders;
  },

  async getOrderById({ id }) {
    const order = await Order.findOne({ where: { id: id } });
    if (!order) throw new Error(`no orders found by id: ${id}`);
    return order;
  },

  async getOrdersByUserId({ userId }) {
    const orders = await Order.findAll({ where: { userId: userId } });
    if (!orders) throw new Error(`no orders found by userId: ${userId}`);
    return orders;
  },

  async createOrder({ order }) {
    console.log('order:', order);
    const { goods, ...orderInf } = order;

    const newOrder = await Order.create(orderInf);
    goods.forEach(async ({ id, price, quantity }) => {
      const good = await Good.findOne({ where: { id: id } });
      const res = await newOrder.addGood(good, { through: { price, quantity } });
      console.log(res);
    });
    return newOrder;
  },


  orderSchema: {

    typeQuery: `
      getOrderById(id: Int): Order
      getOrdersByUserId(userId: Int): [Order]
      getOrders: [Order]
    `,

    typeMutation: `
      createOrder(order: OrderInput): Order
    `,

    typeOrderInput: `
      input OrderInput {
        name: String,
        phone: String,
        email: String,
        address: String,
        userId: Int,
        goods: [GoodToOrderInput]
      }
    `,

    typeOrder: `
      type Order {
        id: Int,
        createdAt: String,
        name: String,
        phone: String,
        email: String,
        address: String,
        userId: Int,
        total: Float,
        goods: [GoodToOrder]
      }
    `
  }
}

module.exports = orderControllers;