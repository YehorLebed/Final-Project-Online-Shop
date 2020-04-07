export const queryLogin = `
  query login($login: String!, $password:String!) {
    login(login: $login, password: $password)
  }
`;

export const mutationRegistration = `
  mutation reg($login: String!, $password: String!) {
    createUser(user: {login: $login, password: $password}) {
      id
    }
  }
`;