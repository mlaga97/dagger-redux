// Actions
import actions from '../../actions';

function current(state = null, action) {
  switch (action.type) {
    case actions.auth.login.succeeded:
      // Update the user on login
      return action.data.userID;
    default:
      return state;
  }
}

export default current;
