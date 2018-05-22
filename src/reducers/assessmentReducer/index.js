// Actions
import actions from '../../actions';

// Reducers
import all from './all';
import get from './get';
import list from './list';
import metadata from './metadata';

// Handle some actions
export default function settings(state = null, action) {
	//return Object.assign({}, state, {
	//	all: action.data,
	//});
	switch(action.type) {
		case actions.assessment.all.succeeded:
			return all(state, action);
		case actions.assessment.get.succeeded:
			return get(state, action);
		case actions.assessment.list.succeeded:
			return list(state, action);
		case actions.assessment.metadata.succeeded:
			return metadata(state, action);
		default:
			return state;
	}
}
