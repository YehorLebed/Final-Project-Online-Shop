// Utils
const { buildSchema } = require('graphql');
const jwtHelper = require('./jwt-helper');

// Models
const { User } = require('../models');

// Controllers
const userControllers = require('./user');
const goodControllers = require('./good');
const imageControllers = require('./image');



// Schema
const schema = buildSchema(`
  
  type Mutation {
    ${userControllers.userSchema.typeMutation}
    ${goodControllers.goodSchema.typeMutation}
    ${imageControllers.imageSchema.typeMutation}
  }

  type Query {
    ${userControllers.userSchema.typeQuery}
    ${goodControllers.goodSchema.typeQuery}
    ${imageControllers.imageSchema.typeQuery}
  }

  ${userControllers.userSchema.typeUser}
  ${goodControllers.goodSchema.typeGood}
  ${imageControllers.imageSchema.typeImage}


  ${userControllers.userSchema.typeUserInput}
  ${goodControllers.goodSchema.typeGoodInput}
  ${imageControllers.imageSchema.typeImageInput}
`);


// Root
const root = {
  // User
  createUser: userControllers.createUser,
  login: userControllers.login,

  // Good
  createGood: goodControllers.createGood,
  getOneGood: goodControllers.getOneGood,
  getGoods: goodControllers.getGoods,
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