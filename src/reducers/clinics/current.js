// Actions
import actions from '../../actions';

function current(state = null, action) {
  switch (action.type) {
    case actions.clinic.current.get.succeeded:
      return action.data.id;
    case actions.clinic.current.post.requested: // TODO: Wait for response success
      return action.data;
    default:
      return state;
  }
}

export default current;
