import ShopServices from '../../services/shopServices';
import { actionPromise, actionClear } from '../promise/promise.actions';
import authTypes from './auth.types';


export const authLogin = token => ({ type: authTypes.LOGIN, token });
const authLogout = () => ({ type: authTypes.LOGOUT });

const actionRegistration = user => async (dispatch) => {
  const registrationResult = await dispatch(actionPromise('registration', ShopServices.createUser(user)));
  return registrationResult;
}

export const actionLogin = (login, password) => async (dispatch) => {
  const data = await dispatch(actionPromise('login', ShopServices.login(login, password)));
  if (data) dispatch(authLogin(data));
}

export const actionRegistrationAndLogin = (login, password) => async (dispatch) => {
  const data = await dispatch(actionRegistration(login, password));
  if (data) dispatch(authLogin(data));
}

export const actionLogout = () => async (dispatch) => {
  await dispatch(actionClear('login'));
  dispatch(authLogout());
}