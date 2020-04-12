const Sequelize = require('sequelize');
const sequelize = require('../db.setup');

const Image = './image.js';

class Good extends Sequelize.Model {
  get images() {
    return this.getImages();
  }
};
Good.init({
  name: Sequelize.STRING,
  description: Sequelize.TEXT,
  price: Sequelize.FLOAT
}, { sequelize, modelName: 'good' });

module.exports = Good;