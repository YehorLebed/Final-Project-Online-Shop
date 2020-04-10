import cartTypes from './cart.types';


const INITIAL_STATE = {
  cartList: [],
  total: 0
};

// function that increase/decrease item quantity + remove if it == 0;
function newStateWithUpdatedItemQuantity(state, itemIndex, quantity) {
  const { cartList } = state;
  let { total } = state;

  let newCartList = cartList.slice();
  newCartList[itemIndex].quantity += quantity;
  total += +newCartList[itemIndex].price * quantity;
  if (newCartList[itemIndex].quantity === 0)
    newCartList = [...newCartList.slice(0, itemIndex), ...newCartList.slice(itemIndex + 1)];
  return { cartList: newCartList, total };
}


const cartReducer = (state = INITIAL_STATE, action) => {

  if (action.type === cartTypes.ADD_TO_CART) {
    const indexItemExist = state.cartList.findIndex(item => item.id === action.id);
    if (indexItemExist !== -1)
      return newStateWithUpdatedItemQuantity(state, indexItemExist, 1);

    const { id, name, price } = action;
    return {
      cartList: [...state.cartList, { id, name, price, quantity: 1 }],
      total: state.total += +price
    };
  }

  if (action.type === cartTypes.REMOVE_FROM_CART) {
    const indexItemExist = state.cartList.findIndex(item => item.id === action.id);
    if (indexItemExist !== -1)
      return newStateWithUpdatedItemQuantity(state, indexItemExist, -1)
  }

  if (action.type === cartTypes.DELETE_FROM_CART) {
    const indexItemExist = state.cartList.findIndex(item => item.id === action.id);
    if (indexItemExist !== -1)
      return newStateWithUpdatedItemQuantity(state, indexItemExist, -state.cartList[indexItemExist].quantity);
  }

  return state;
}

export default cartReducer;