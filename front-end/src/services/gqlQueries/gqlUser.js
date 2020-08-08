export const queryLogin = `
  query login($login: String!, $password: String!) {
    login(login: $login, password: $password)
  }
`;

export const queryGetUserById = `
  query getUserById($id: Int) {
    getUserById(id: $id) {
      id, login, createdAt
    }
  }
`;

export const queryGetUsers = `
  query getUsers {
    getUsers {
      id, login, createdAt
    }
  }
`;

export const mutationCreateUser = `
  mutation createUser($user: UserInput) {
    createUser(user: $user)
  }
`;

export const mutationUpdateUser = `
  mutation updateUser($user: UserInput) {
    updateUser(user: $user) {
      id, login, createdAt
    }
  }
`;

export const mutationDeleteUserById = `
  query deleteUserById($id: Int) {
    deleteUserById(id: $id)
  }
`;