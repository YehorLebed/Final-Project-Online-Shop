const { User } = require('../models')
const jwtHelper = require('./jwt-helper');

const userControllers = {

  async createUser({ user }) {
    const userAlreadyExists = await User.findOne({ where: { login: user.login } });
    if (userAlreadyExists) throw new Error('User with current login already exists');
    return await User.create(user);
  },

  async login({ login, password }) {
    const user = await User.findOne({ where: { login } });
    if (!user) return new Error('No user with current login');
    if (user.password !== password) return new Error('Uncorrect password or login');
    return jwtHelper.jwt.sign({ sub: user.id, login }, jwtHelper.JWT_SECRET);
  },

  userSchema: {
    typeQuery: `
      login(login: String!, password: String!): String
    `,
    typeMutation: `
      createUser(user: UserInput): User
    `,
    typeUserInput: `
      input UserInput {
        login: String,
        password: String
      }
    `,
    typeUser: `
      type User {
        id: Int,
        login: String
      }
    `
  }
}

module.exports = userControllers;