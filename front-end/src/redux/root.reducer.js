import { combineReducers } from 'redux';

import promiseReducer from './promise/promise.reducer';
import errorReducer from './error/error.reducer';

import authReducer from './user/auth.reducer';
import cartReducer from './cart/cart.reducer';

export default combineReducers({
  userData: authReducer,
  cartData: cartReducer,
  responsedData: promiseReducer,
  errors: errorReducer
}); 