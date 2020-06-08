const GoodToOrderControllers = {

  typeGoodToOrderInput: `
    input GoodToOrderInput {
      id: Int,
      price: Float,
      quantity: Int,
      name: String
    }
  `,

  typeGoodToOrder: `
    type GoodToOrder {
      id: Int,
      price: Float,
      quantity: Int,
      name: String
    }
  `
};

module.exports = GoodToOrderControllers;