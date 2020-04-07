import ShopServices from '../../services/shop-services';
import { actionPromise, actionClear } from '../promise/promise.actions';
import authTypes from './auth.types';


export const authLogin = token => ({ type: authTypes.LOGIN, token });
const authLogout = () => ({ type: authTypes.LOGOUT });

const actionRegistration = (login, password) => async (dispatch) => {
  const registrationResult = await dispatch(actionPromise('registration', ShopServices.registration(login, password)));
  return registrationResult;
}

export const actionLogin = (login, password) => async (dispatch) => {
  const data = await dispatch(actionPromise('login', ShopServices.login(login, password)));
  if (data) dispatch(authLogin(data.login));
}

export const actionRegistrationAndLogin = (login, password) => async (dispatch) => {
  const isRegistrationSuccess = await dispatch(actionRegistration(login, password));
  if (isRegistrationSuccess) dispatch(actionLogin(login, password));
}

export const actionLogout = () => async (dispatch) => {
  await dispatch(actionClear('login'));
  dispatch(authLogout());
}