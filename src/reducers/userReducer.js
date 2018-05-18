// Get action list
import actions from '../actions';

// Handle some actions
export default function settings(state = null, action) {
	switch(action.type) {
		case actions.user.list.succeeded:
			return Object.assign([], state, action.data);
		default:
			return state;
	}
}
