const { User } = require('../models')
const jwtHelper = require('../util/jwtHelper');

const userControllers = {
  root: {
    async login({ login, password }) {
      try {
        const user = await User.findOne({ where: { login } });
        if (!user) throw new Error('No user with current login');
        if (user.password !== password) throw new Error('Uncorrect password or login');

        let token = jwtHelper.jwt.sign({ sub: user.id, login: user.login, role: user.role }, jwtHelper.JWT_SECRET);
        return token;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },

    async getUsers() {
      try {
        const users = await User.getAll();
        const usersWithNoPassword = users.map(({ password, ...inf }) => inf);
        return usersWithNoPassword;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },

    async createUser({ user }) {
      try {
        const userAlreadyExists = await User.findOne({ where: { login: user.login } });
        if (userAlreadyExists) throw new Error('User with current login already exists');
        const newUser = await User.create(user);
        let token = jwtHelper.jwt.sign({ sub: newUser.id, login: newUser.login, role: newUser.role }, jwtHelper.JWT_SECRET);
        return token;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },

    async updateUser({ user }) {
      try {
        const userExist = await User.findOne({ where: { login: user.login } });
        if (!userExist) throw new Error(`User with current login no exists`);
        const updatedUser = await User.update(user, { where: { login: user.login } });
        return updatedUser;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },

    async deleteUserById({ id }) {
      try {
        const exists = await User.findByPk(id);
        if (exists) {
          const deletedId = await User.destroy({ where: { id } });
          return deletedId;
        }
        throw new Error(`No user with current id: ${id}`);
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
  },

  schema: {
    type: `
      type User {
        id: Int,
        login: String,
        createdAt: String,
        updatedAt: String
      }
    `,

    typeInput: `
      input UserInput {
        login: String,
        password: String
      }
    `,

    typeQuery: `
      login(login: String!, password: String!): String
      getUsers: [User]
    `,

    typeMutation: `
      createUser(user: UserInput): String
      updateUser(user: UserInput): User
      deleteUserById(id: Int): Int
    `,
  }
}

module.exports = userControllers;