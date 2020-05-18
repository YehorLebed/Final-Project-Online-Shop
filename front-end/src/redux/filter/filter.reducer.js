import filterTypes from './filter.types';
const INITIAL_STATE = {};

const filterReducer = (state = INITIAL_STATE, action) => {
  if (action.type === filterTypes.SET_FILTER_BY_NAME) {
    return { ...state, name: action.name };
  }

  return state;
};

export default filterReducer;