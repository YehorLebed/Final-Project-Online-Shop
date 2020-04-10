import cartTypes from './cart.types';

export const actionAddToCart = (id, name = null, price = null) => ({ type: cartTypes.ADD_TO_CART, id, name, price })
export const actionRemoveFromCart = id => ({ type: cartTypes.REMOVE_FROM_CART, id })
export const actionDeleteFromCart = id => ({ type: cartTypes.DELETE_FROM_CART, id })