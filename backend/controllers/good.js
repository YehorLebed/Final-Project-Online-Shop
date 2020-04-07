const { Good } = require('../models');

const goodControllers = {

  async getGoods(query) {
    const goods = await Good.findAll(query);
    if (!goods) throw new Error('No goods found by this filter');
    return goods;
  },

  async getOneGood(query) {
    const good = await Good.findOne(query);
    if (!good) throw new Error('No good found by this filer');
    return good;
  },

  async createGood(good) {
    // ...
  },
  // update Good, DeleteGood

  goodSchema: {
    typeQuery: `
      getGoods(query: String): Good
      getOneGood(query: String): [Good]
    `,
    typeMutation: `
      createGood(good: GoodInput): Good
    `,
    typeGoodInput: `
      type GoodInput {
        name: String,
        description: String
        price: Float
        categories: [Category]
        images: [Image]
      }
    `,
    typeGood: `
      type Good {
        id: Int,
        createdAt: String
        name: String,
        description: String
        price: Float
        categories: [Category]
        images: [Image]
      }
    `
  }
}

module.exports = goodControllers;