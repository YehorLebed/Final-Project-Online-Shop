const { Order, Notebook, NotebookToOrder } = require('../models');

const orderControllers = {
  root: {
    async getOrders() {
      try {
        const orders = await Order.findAll();
        if (!orders) throw new Error('No orders found');
        return orders;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },

    async getOrderById({ id }) {
      try {
        const order = await Order.findByPk(id);
        if (!order) throw new Error(`no orders found by id: ${id}`);
        return order;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },

    async getOrdersByUserId({ userId }) {
      try {
        const orders = await Order.findAll({ where: { userId: userId } });
        if (!orders) throw new Error(`no orders found by userId: ${userId}`);
        return orders;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },

    async createOrder({ order }) {
      const { notebooks, ...orderInf } = order;
      try {
        const newOrder = await Order.create(orderInf);
        notebooks.forEach(async ({ id, price, quantity }) => {
          const notebook = await Notebook.findOne({ where: { id: id } });
          await newOrder.addNotebook(notebook, { through: { price, quantity } });
        });
        return newOrder;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },

    async updateOrder({ order }) {
      const { notebooks, ...orderInf } = order;
      try {
        const orderToUpdate = await Order.findByPk(orderInf.id);
        await NotebookToOrder.destroy({ where: { orderId: orderInf.id } });

        notebooks.forEach(async ({ id, price, quantity }) => {
          const notebook = await Notebook.findOne({ where: { id: id } });
          await orderToUpdate.addNotebook(notebook, { through: { price, quantity } });
        });
        return newOrder;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },

    async deleteOrderById({ id }) {
      try {
        const deletedId = await Order.destroy({ where: { id } });
        return deletedId
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
  },

  schema: {
    type: `
      type Order {
        id: Int,
        user: User,
        total: Float,
        name: String,
        phone: String,
        email: String,
        address: String,
        createdAt: String,
        notebooks: [NotebookToOrder]
      }
    `,

    typeInput: `
      input OrderInput {
        id: Int,
        user: UserInput,
        total: Float,
        name: String,
        phone: String,
        email: String,
        address: String,
        notebooks: [NotebookToOrderInput]
      }
    `,

    typeQuery: `
      getOrdersByUserId(userId: Int): [Order]
      getOrderById(id: Int): Order
      getOrders: [Order]
    `,

    typeMutation: `
      createOrder(order: OrderInput): Order
      updateOrder(order: OrderInput): Order
      deleteOrderById(id: Int): Int
    `,
  }
}

module.exports = orderControllers;