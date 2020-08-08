export const queryGetOrders = `
  query getOrders {
    getOrders {
      user { id, login },
      id, total, createdAt 
      name, phone, email, address,
      notebooks { name, price, quantity }
    }
  }
`;

export const queryGetOrderById = `
  query getOrderById($id: Int) {
    getOrderById(id: $id) {
      user { id, login },
      id, total, createdAt 
      name, phone, email, address,
      notebooks { name, price, quantity }
    }
  }
`;

export const mutationCreateOrder = `
  mutation createOrder($order: OrderInput) {
    createOrder(order: $order) {
      user { id, login },
      id, total, createdAt 
      name, phone, email, address,
      notebooks { name, price, quantity }
    }
  }
`;

export const mutationUpdateOrder = `
  mutation UpdateOrder($order: OrderInput) {
    UpdateOrder(order: $order) {
      user { id, login },
      id, total, createdAt 
      name, phone, email, address,
      notebooks { name, price, quantity }
    }
  }
`;

export const mutationDeleteOrderById = `
  mutation deleteOrderById($id: Int) {
    deleteOrderById(id: $id)
  }
`;