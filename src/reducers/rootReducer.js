// Library imports
import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

// Actions
import * as allActions from '../actions/allActions';

// Reducers
import userData from './userDataReducer';
import auth from './authReducer';

// Combine our reducers together
const rootReducer = combineReducers({
	userData,
	auth,
	form: formReducer.plugin({
		loginForm: (state, action) => {
			switch(action.type) {
				default:
					return state;
			}
		},
	})
});

export default rootReducer;
