import { combineReducers } from 'redux';
import promiseReducer from './promise/promise.reducer';
import authReducer from './user/auth.reducer';
import errorReducer from './error/error.reducer';

export default combineReducers({
  responsedData: promiseReducer,
  userData: authReducer,
  errors: errorReducer
}); 