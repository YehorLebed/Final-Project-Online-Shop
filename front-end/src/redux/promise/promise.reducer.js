import promiseTypes from './promise.types';

const INITIAL_STATE = {};

const promiseReducer = (state = INITIAL_STATE, action) => {
  if (action.type === promiseTypes.PROMISE) {
    const { type, name, ...newState } = action;
    return { ...state, [name]: newState };
  }

  if (action.type === promiseTypes.CLEAR) {
    if (!state.hasOwnProperty(action.name)) return state;
    const newState = { ...state };
    delete newState[action.name];
    return newState;
  }

  return state;
}

export default promiseReducer;