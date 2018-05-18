// Get action list
import actions from '../actions';

// Handle some actions
export default function settings(state = null, action) {
	switch(action.type) {
		case actions.assessment.all.succeeded:
			return Object.assign({}, state, {
				all: action.data,
			});
		case actions.assessment.list.succeeded:
			return Object.assign({}, state, {
				list: action.data,
			});
		default:
			return state;
	}
}
