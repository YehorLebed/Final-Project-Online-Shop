const Sequelize = require('sequelize');
const sequelize = require('../util/db.setup');

class Notebook extends Sequelize.Model {
  get images() {
    if (this.__images) return this.images;
    try {
      const images = this.getImages();
      this.images = images;
      return images;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  set images(images) {
    this.__images = images;
  }

  get processor() {
    if (this.__processor) return this.__processor;
    try {
      const processor = this.getProcessor();
      this.processor = processor;
      return processor;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  set processor(processor) {
    this.__processor = processor;
  }

  get display() {
    if (this.__display) return this.__display;
    try {
      const display = this.getDisplay();
      this.display = display;
      return display;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  set display(display) {
    this.__display = display;
  }

  get battery() {
    if (this.__battery) return this.__battery;
    try {
      const battery = this.getBattery();
      this.battery = battery;
      return battery;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  set battery(battery) {
    this.__battery = battery;
  }

  get ram() {
    if (this.__ram) return this.__ram;
    try {
      console.log(this.__proto__);
      const ram = this.getRam();
      this.ram = ram;
      return ram;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  set ram(ram) {
    this.__ram = ram;
  }

  get rom() {
    if (this.__rom) return this.__rom;
    try {
      const rom = this.getRom();
      this.rom = rom;
      return rom;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  set rom(rom) {
    this.__rom = rom;
  }
};
Notebook.init({
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  price: {
    type: Sequelize.DECIMAL(13, 2),
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  }
}, { sequelize, modelName: 'notebook' });

module.exports = Notebook;