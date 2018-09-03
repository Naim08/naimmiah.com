import { combineReducers } from 'redux';

import * as nav from 'modules/Nav';

export default combineReducers({
  nav: nav.reducer
});
