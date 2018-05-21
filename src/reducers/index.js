// Library imports
import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

// Reducers
import assessments from './assessmentReducer';
import auth from './authReducer';
import user from './userReducer';

// Combine our reducers together
const rootReducer = combineReducers({
	assessments,	// Assessments, by class
	auth,			// Authentication information
	//clinics,		// Clinics, by ID
	//info,			// Information about the client and server
	//modules,		// Modules, by name
	//response, 	// Working area for current record
	user,			// Current user data
	//users,		// Data for users, by id
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
