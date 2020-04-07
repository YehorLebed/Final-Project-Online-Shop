// Utils
const { buildSchema } = require('graphql');
const jwtHelper = require('./jwt-helper');

// Models
const { User } = require('../models');

// Controllers
const userControllers = require('./user');



// Schema
const schema = buildSchema(`
  ${userControllers.userSchema}
`);


// Root
const root = {
  // User
  createUser: userControllers.createUser,
  login: userControllers.login
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