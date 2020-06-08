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
      price
      images { filename originalname }
    }
  }
`;

export const queryGetGoodsByName = `
  query getGoodsByName($name: String!) {
    getGoodsByName(name: $name) {
      id
      name
      price
      images { filename originalname }
    }
  }
`;

export const queryGetOneGoodById = `
  query getOneGoodById($id: Int!) {
    getOneGoodById(id: $id) {
      id
      name
      description
      price
      images { filename originalname }
    }
  }
`;

export const mutationCreateOrder = `
  mutation createOrder($order: OrderInput) {
    createOrder(order: $order) { id }
  }
`;

export const queryGetOrderById = `
  query getOrderById($id: Int!) {
    getOrderById(id: $id) {
      id
      name
      phone
      email
      address
      user
      createdAt
      total
      goods {
        name
        price
        quantity
      }
    }
  }
`;

export const queryGetOrdersByUserId = `
  query getOrdersByUserId($userId: Int!) {
      getOrdersByUserId(userId: $userId) {
        id
        name
        email
        phone
        address,
        total
        goods{
          id
          name
          price
          quantity        
        }
      }
  }
`;

export const queryGetAllOrders = `
  query getOrders {
      getOrders {
        id
        name
        email
        phone
        address,
        total
        goods{
          id
          name
          price
          quantity        
        }
      }
  }
`