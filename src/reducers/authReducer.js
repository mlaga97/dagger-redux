// Get action list
import {AUTH_STATUS_SUCCEEDED, AUTH_LOGIN_SUCCEEDED, AUTH_LOGOUT_SUCCEEDED} from '../actions/allActions';

// Handle some actions
export default function settings(state = null, action) {
	switch(action.type) {
		case AUTH_STATUS_SUCCEEDED:
			return Object.assign({}, state, {
				status: action.data,
			});
		case AUTH_LOGIN_SUCCEEDED:
			return Object.assign({}, state, {
				status: true,
			});
		case AUTH_LOGOUT_SUCCEEDED:
			return Object.assign({}, state, {
				status: false,
			});
		default:
			return state;
	}
}
