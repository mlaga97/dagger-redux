// Library imports
import {combineReducers} from 'redux';

// Reducers
import userData from './userDataReducer';
import authReducer from './authReducer';

// Combine our reducers together
const rootReducer = combineReducers({
	userData,
	authReducer,
});

export default rootReducer;
