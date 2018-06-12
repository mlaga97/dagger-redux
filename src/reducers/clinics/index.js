// Library imports
import { combineReducers } from 'redux';

// Reducers
import all from './all';
import current from './current';

export default combineReducers({
  all,
  current,
});
