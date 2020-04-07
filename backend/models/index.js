const User = require('./user');
const Good = require('./good');
const Image = require('./image');

Good.hasMany(Image);
Image.belongsTo(Good);

User.hasOne(Image);
Image.belongsTo(User);

module.exports = {
  User,
  Good,
  Image
};