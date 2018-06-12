// Library imports
import { combineReducers } from 'redux';

// Reducers
import all from './all';
import selected from './selected';

export default combineReducers({
  all,
  selected,
});
