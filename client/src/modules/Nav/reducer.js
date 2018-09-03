import * as t from './actiontypes';

const initialIntelState = {};

const createReducer = (initialState, handlers) => (state = initialIntelState, action) => {
  if (Object.prototype.hasOwnProperty.call(handlers, action.type)) {
    return handlers[action.type](state, action);
  }
  return state;
};

// eslint-disable-next-line no-unused-vars
const setNav = (state, action) => ({
  ...state,
});

const navReducer = createReducer(initialIntelState, {
  [t.SET_NAV]: setNav,
});

export default navReducer;
