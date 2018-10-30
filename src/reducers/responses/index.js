// Library imports
import { combineReducers } from 'redux';

// Reducers
import all from './all';
import post from './post';

export default combineReducers({
  all,
  post,
});
