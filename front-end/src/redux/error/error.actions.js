import errorTypes from './error.types';

export const actionSetError = (name, message) => ({ type: errorTypes.SET_ERROR, name, message });
export const actionConfirmError = name => ({ type: errorTypes.CONFIRM_ERROR, name });