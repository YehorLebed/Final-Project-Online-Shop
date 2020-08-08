import authTypes from './auth.types';
import jwt_decode from 'jwt-decode';
import GraphQlHelper from '../../services/gqlHelper';

const INITIAL_STATE = {};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case authTypes.LOGIN:
      const { token } = action;

      if (!token) return state;
      localStorage.authToken = token;
      GraphQlHelper.update();
      const userInfo = jwt_decode(token);
      return { token, userInfo };

    case authTypes.LOGOUT:
      localStorage.removeItem('authToken');
      return {};

    default:
      return state;
  }
}

export default authReducer;