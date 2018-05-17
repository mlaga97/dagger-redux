// Get action list
import {ASSESSMENT_LIST_SUCCEEDED, ASSESSMENT_ALL_SUCCEEDED} from '../actions/allActions';

// Handle some actions
export default function settings(state = null, action) {
	switch(action.type) {
		case ASSESSMENT_ALL_SUCCEEDED:
			return Object.assign({}, state, {
				all: action.data,
			});
		case ASSESSMENT_LIST_SUCCEEDED:
			return Object.assign({}, state, {
				list: action.data,
			});
		default:
			return state;
	}
}
