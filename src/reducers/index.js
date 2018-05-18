// Library imports
import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

// Reducers
import assessment from './assessmentReducer';
import auth from './authReducer';
import user from './userReducer';

// Combine our reducers together
const rootReducer = combineReducers({
	user,
	auth,
	assessment,
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
