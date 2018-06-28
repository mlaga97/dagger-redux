// Actions
import actions from '../../../actions';

// Reducers
import all from './all';

function allReducer(state = null, action) {
  switch (action.type) {
    case actions.response.all.succeeded:
      return all(state, action);
    default:
      return state;
  }
}

export default allReducer;
