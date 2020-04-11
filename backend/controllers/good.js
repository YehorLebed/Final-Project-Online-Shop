const { Good } = require('../models');
const { image } = require('./image');

const goodControllers = {

  async getGoods() {
    const goods = await Good.findAll();
    if (!goods) throw new Error('No goods found');
    return goods;
  },

  async getOneGood(query) {
    const good = await Good.findOne(query);
    if (!good) throw new Error('No good found by this filer');
    return good;
  },

  async createGood({ good }) {
    const goodExists = await Good.findOne({ where: { name: good.name } });
    if (goodExists) throw new Error('Good with this name already exists');
    const newGood = await Good.create(good);
    await newGood.createImage({ fileName: good.imageFileName });
    return newGood;
  },

  goodSchema: {

    typeQuery: `
      getOneGood(query: String): Good
      getGoods: [Good]
    `,

    typeMutation: `
      createGood(good: GoodInput): Good
    `,

    typeGoodInput: `
      input GoodInput {
        name: String,
        description: String
        price: Float
        imageFileName: String
      }
    `,

    typeGood: `
      type Good {
        id: Int,
        createdAt: String
        name: String,
        description: String
        price: Float
        images: [Image]
      }
    `
  }
}

module.exports = goodControllers;