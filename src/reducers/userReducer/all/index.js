// Actions
import actions from '../../../actions';

// Reducers
import all from './all';
import current from './current';
import get from './get';
import list from './list';

function allReducer(state = null, action) {
  switch (action.type) {
    case actions.user.all.succeeded:
      return all(state, action);
    case actions.user.current.succeeded:
      return current(state, action);
    case actions.user.get.succeeded:
      return get(state, action);
    case actions.user.list.succeeded:
      return list(state, action);
    default:
      return state;
  }
}

export default allReducer;
