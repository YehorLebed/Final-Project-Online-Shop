const { Battery, Display, Processor, RAM, ROM } = require('./notebookProperties');
const NotebookToOrder = require('./notebookToOrder');
const Notebook = require('./notebook');
const Category = require('./category');
const Order = require('./order');
const Image = require('./image');
const User = require('./user');

// Notebook relationships
Processor.hasMany(Notebook, { foreignKey: { name: 'processorId', allowNull: false }, onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Display.hasMany(Notebook, { foreignKey: { name: 'displayId', allowNull: false }, onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Battery.hasMany(Notebook, { foreignKey: { name: 'batteryId', allowNull: false }, onDelete: 'CASCADE', onUpdate: 'CASCADE' });
RAM.hasMany(Notebook, { foreignKey: { name: 'ramId', allowNull: false }, onDelete: 'CASCADE', onUpdate: 'CASCADE' });
ROM.hasMany(Notebook, { foreignKey: { name: 'romId', allowNull: false }, onDelete: 'CASCADE', onUpdate: 'CASCADE' });

Notebook.belongsTo(Processor);
Notebook.belongsTo(Display);
Notebook.belongsTo(Battery);
Notebook.belongsTo(RAM);
Notebook.belongsTo(ROM);


Notebook.hasMany(Image, { foreignKey: { name: 'notebookId', allowNull: true }, onDelete: 'CASCADE', onUpdate: 'CASCADE' });

Notebook.belongsToMany(Category, { through: 'notebookToCategory' });
Category.belongsToMany(Notebook, { through: 'notebookToCategory' });

Notebook.belongsToMany(Order, { through: NotebookToOrder });
Order.belongsToMany(Notebook, { through: NotebookToOrder });


// User relationships
User.hasMany(Order, { foreignKey: { name: 'userId', allowNull: true }, onDelete: 'SET NULL', onUpdate: 'CASCADE' });


// Category relationships
Category.hasMany(Category, { as: 'child', foreignKey: 'parentId', onDelete: 'SET NULL', onUpdate: 'CASCADE' });
Category.belongsTo(Category, { as: 'parent', sourceKey: 'parentId' });

console.log('Processor:', Processor.prototype);
console.log('Notebook: ', Notebook.prototype);
console.log('Image: ', Image.prototype);


module.exports = {
  Battery, Display, Processor, RAM, ROM,
  Notebook, Order, NotebookToOrder,
  User, Image, Category
};