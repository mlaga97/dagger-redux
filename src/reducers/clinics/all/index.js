// Actions
import actions from '../../../actions';

// Reducers
import all from './all';
import current from './current';
import get from './get';
import list from './list';

// Handle some actions
export default function settings(state = null, action) {
  switch (action.type) {
    case actions.clinic.all.succeeded:
      return all(state, action);
    case actions.clinic.current.succeeded:
      return current(state, action);
    case actions.clinic.get.succeeded:
      return get(state, action);
    case actions.clinic.list.succeeded:
      return list(state, action);
    default:
      return state;
  }
}
