// Library imports
import { combineReducers } from 'redux';

// Reducers
import all from './all';
import list from './list';
import post from './post';

export default combineReducers({
  all,
  list,
  post,
});
