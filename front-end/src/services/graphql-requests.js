export const queryLogin = `
  query login($login: String!, $password:String!) {
    login(login: $login, password: $password)
  }
`;

export const mutationRegistration = `
  mutation reg($login: String!, $password: String!) {
    createUser(user: {login: $login, password: $password}) { id }
  }
`;

export const mutationCreateGood = `
  mutation newGood($good: GoodInput){
    createGood(good: $good) { id }
  }
`

export const queryGetAllGoods = `
  query getGoods {
    getGoods {
      id
      name
      description
      price
      images { filename originalname }
    }
  }
`;

export const queryGetOneGood = `
  query getGood($id: Int!) {
    getOneGood(id: $id) {
      id
      name
      description
      price
      images { filename originalname }
    }
  }
`;