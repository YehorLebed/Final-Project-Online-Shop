const Sequelize = require('sequelize');
const sequelize = require('../util/db.setup');

class Category extends Sequelize.Model {
  get parent() {
    if (this.__parent) return this.__parent;
    try {
      const parent = Category.findByPk(this.parentId);
      if (parent) {
        this.parent = parent;
        return parent;
      }
      return null;
    } catch (error) {
      console.log(error);
      throw error
    }
  }

  set parent(parent) {
    this.__parent = parent;
  }

  get notebooks() {
    if (this.__notebooks) return this.__notebooks;
    try {
      const notebooks = Category.getNotebooks();
      this.notebooks = notebooks;
      return notebooks;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  set notebooks(notebooks) {
    this.__notebooks = notebooks;
  }

  get subCategories() {
    if (this.__subCategories) return this.__subCategories;
    try {
      const subs = Category.findAll({ where: { parentId: this.id } });
      this.subCategories = subs;
      return subs;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  set subCategories(subCategories) {
    this.__subCategories = subCategories;
  }
};
Category.init({
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
}, { sequelize, modelName: 'category' });

module.exports = Category;