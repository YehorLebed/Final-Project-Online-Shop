// Utils
const { buildSchema } = require('graphql');
const jwtHelper = require('./jwt-helper');

// Models
const { User } = require('../models');

// Controllers
const userControllers = require('./user');
const goodControllers = require('./good');
const imageControllers = require('./image');
const orderControllers = require('./order');
const GoodToOrdersControllers = require('./goodToOrder');


// Schema
const schema = buildSchema(`
  
  type Mutation {
    ${userControllers.userSchema.typeMutation}
    ${goodControllers.goodSchema.typeMutation}
    ${imageControllers.imageSchema.typeMutation}
    ${orderControllers.orderSchema.typeMutation}
  }

  type Query {
    ${userControllers.userSchema.typeQuery}
    ${goodControllers.goodSchema.typeQuery}
    ${imageControllers.imageSchema.typeQuery}
    ${orderControllers.orderSchema.typeQuery}
  }

  ${userControllers.userSchema.typeUser}
  ${goodControllers.goodSchema.typeGood}
  ${imageControllers.imageSchema.typeImage}
  ${orderControllers.orderSchema.typeOrder}
  ${GoodToOrdersControllers.typeGoodToOrder}



  ${userControllers.userSchema.typeUserInput}
  ${goodControllers.goodSchema.typeGoodInput}
  ${imageControllers.imageSchema.typeImageInput}
  ${orderControllers.orderSchema.typeOrderInput}
  ${GoodToOrdersControllers.typeGoodToOrderInput}

`);


// Root
const root = {
  // User
  createUser: userControllers.createUser,
  login: userControllers.login,

  // Good
  getGoods: goodControllers.getGoods,
  getOneGoodById: goodControllers.getOneGoodById,
  getGoodsByName: goodControllers.getGoodsByName,
  createGood: goodControllers.createGood,

  // Order
  getOrderById: orderControllers.getOrderById,
  getOrders: orderControllers.getOrders,
  getOrdersByUserId: orderControllers.getOrdersByUserId,
  createOrder: orderControllers.createOrder,
};


// Express_graphql function
module.exports = async (res, req) => {
  const jwt = jwtHelper.jwtCheck(req, jwtHelper.JWT_SECRET);
  if (jwt) {  // with JWT
    const thisUser = await User.findByPk(jwt.sub);
    return ({
      schema: schema,
      rootValue: root,
      graphiql: true,
      context: { jwt, thisUser }
    });
  } else {   // anon
    return ({
      schema: schema,
      rootValue: root,
      graphiql: true
    });
  }
}