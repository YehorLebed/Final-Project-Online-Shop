const Sequelize = require('sequelize');
const sequelize = require('../db.setup');

class Image extends Sequelize.Model { };
Image.init({
  url: Sequelize.STRING,
  fileName: Sequelize.STRING,
}, { sequelize, modelName: 'image' });


module.exports = Image;