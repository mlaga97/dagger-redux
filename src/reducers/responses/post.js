// Actions
import actions from '../../actions';

function current(state = null, action) {
  switch (action.type) {
    case actions.response.post.succeeded:
      return action.data;
    default:
      return state;
  }
}

export default current;
