const Image = require('./image');

const Order = require('./order');
const User = require('./user');
const Good = require('./good');

const GoodToOrder = require('./goodToOrder');

User.hasMany(Order);
Order.belongsTo(User);

Good.hasMany(Image);
Image.belongsTo(Good);

User.hasOne(Image);
Image.belongsTo(User);


Good.belongsToMany(Order, { through: GoodToOrder });
Order.belongsToMany(Good, { through: GoodToOrder });

module.exports = {
  User,
  Good,
  Image,
  Order,
  GoodToOrder
};