const { NotebookToOrder } = require('../models/')

const notebookToOrderControllers = {
  schema: {
    type: `
      type NotebookToOrder {
        notebookId: Int,
        orderId: Int,
        name: String,
        price: Float,
        quantity: Int,
        createdAt: String,
        updatedAt: String
      }
    `,

    typeInput: `
      input NotebookToOrderInput {
        notebookId: Int,
        orderId: Int,
        price: Float,
        name: String,
        quantity: Int
      }
    `,
  }
};

module.exports = notebookToOrderControllers;