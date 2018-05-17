// Library imports
import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

// Reducers
import userData from './userDataReducer';
import auth from './authReducer';
import assessment from './assessmentReducer';

// Combine our reducers together
const rootReducer = combineReducers({
	userData,
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
