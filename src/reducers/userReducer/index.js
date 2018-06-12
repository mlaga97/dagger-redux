// Library imports
import { combineReducers } from 'redux';

// Actions
import actions from '../../actions';

// Reducers
import all from './all';
import current from './current';

const userReducer = combineReducers({
  all,
  current,
});

export default userReducer;
