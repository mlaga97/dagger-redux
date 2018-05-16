// Get action list
import {AUTH_STATUS_SUCCEEDED} from '../actions/allActions';

// Handle some actions
export default function settings(state = null, action) {
	switch(action.type) {
		case AUTH_STATUS_SUCCEEDED:
			return Object.assign({}, state, action.data);
		default:
			return state;
	}
}
