const Sequelize = require('sequelize');
const sequelize = require('../db.setup');

class Image extends Sequelize.Model { };
Image.init({
  filename: Sequelize.STRING,
  originalname: Sequelize.STRING
}, { sequelize, modelName: 'image' });


module.exports = Image;