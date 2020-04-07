import errorTypes from './error.types';

const INITIAL_STATE = [];

const errorReducer = (state = INITIAL_STATE, action) => {
  if (action.type === errorTypes.SET_ERROR) {
    const { name, message } = action;
    const idxOfElem = state.findIndex(item => item.name === name);
    const newErrorObject = { name, message, isConfirmError: false };

    if (idxOfElem === -1) return [...state, newErrorObject];
    return [...state.slice(0, idxOfElem), newErrorObject, ...state.slice(idxOfElem + 1)];
  }
  if (action.type === errorTypes.CONFIRM_ERROR) {
    const { name } = action;
    const idxOfElem = state.findIndex(item => item.name === name);
    if (idxOfElem === -1) return state;
    const newErrorObject = Object.assign(state[idxOfElem]);
    newErrorObject.isConfirmError = true;
    return [...state.slice(0, idxOfElem), newErrorObject, ...state.slice(idxOfElem + 1)];
  }
  return state;
};

export default errorReducer;