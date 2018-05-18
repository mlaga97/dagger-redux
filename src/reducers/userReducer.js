// Get action list
import {USER_LIST_SUCCEEDED} from '../actions/allActions';

// Handle some actions
export default function settings(state = null, action) {
	switch(action.type) {
		case USER_LIST_SUCCEEDED:
			return Object.assign([], state, action.data);
		default:
			return state;
	}
}
