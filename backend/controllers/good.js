const { Good } = require('../models');

const goodControllers = {

  async getGoods() {
    const goods = await Good.findAll();
    if (!goods) throw new Error('No goods found');
    return goods;
  },

  async getOneGood({id}) {
    const good = await Good.findOne({ where: { id: id } });
    if (!good) throw new Error(`No good found by this id: ${id}`);
    return good;
  },

  async createGood({ good }) {
    const { images, ...goodInf } = good;

    const goodExists = await Good.findOne({ where: { name: goodInf.name } });
    if (goodExists) throw new Error('Good with this name already exists');
    const newGood = await Good.create(goodInf);
    images.forEach(async ({ filename, originalname }) =>
      await newGood.createImage({ filename, originalname }));
    return newGood;
  },

  goodSchema: {

    typeQuery: `
      getOneGood(id: Int): Good
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
        images: [ImageInput]
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