// Actions
import actions from '../../../actions';

// Reducers
import all from './all';

function allReducer(state = null, action) {
  switch (action.type) {
    case actions.response.all.succeeded:
      return all(state, action);
    case actions.response.get.succeeded:
      return Object.assign({}, state, {
        [action.data.metadata.id]: action.data,
      });
    default:
      return state;
  }
}

export default allReducer;
