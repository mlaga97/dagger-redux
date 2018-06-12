// Actions
import actions from '../../actions';

function current(state = null, action) {
  switch (action.type) {
    case actions.clinic.current.succeeded:
      return action.data.id;
    default:
      return state;
  }
}

export default current;
