// Actions
import actions from '../../actions';

function current(state = null, action) {
  switch (action.type) {
    // TODO: This, eventually, better.
    //case actions.auth.login.succeeded:
    //  return action.data.userID;
    case actions.user.current.succeeded:
      return action.data.id;
    default:
      return state;
  }
}

export default current;
