// Actions
import actions from '../../actions';

function current(state = null, action) {
  switch (action.type) {
    case actions.response.list.succeeded:
      return Object.assign({}, state, {
        [action.data.queryID]: action.data.data,
      });
    default:
      return state;
  }
}

export default current;
