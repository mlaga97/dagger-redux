// Library imports
import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

// Actions
import * as allActions from '../actions/allActions';

// Reducers
import userData from './userDataReducer';
import authReducer from './authReducer';

// Combine our reducers together
const rootReducer = combineReducers({
	userData,
	authReducer,
	/*form: formReducer.plugin({
		scoutingForm: (state, action) => {
			switch(action.type) {
				case allActions.SUBMITTED_SCOUTING_DATA:
					return undefined;
				default:
					return state;
			}
		}
	})*/
});

export default rootReducer;
