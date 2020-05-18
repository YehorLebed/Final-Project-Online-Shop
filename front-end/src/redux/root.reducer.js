import { combineReducers } from 'redux';

import promiseReducer from './promise/promise.reducer';
import errorReducer from './error/error.reducer';

import filterReducer from './filter/filter.reducer';
import authReducer from './user/auth.reducer';
import cartReducer from './cart/cart.reducer';

export default combineReducers({
  userData: authReducer,
  filterData: filterReducer,
  cartData: cartReducer,
  responsedData: promiseReducer,
  errors: errorReducer
}); 