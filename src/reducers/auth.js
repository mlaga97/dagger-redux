// Get action list
import actions from '../actions';

// Handle some actions
export default function settings(state = null, action) {
  switch (action.type) {
    case actions.auth.login.succeeded:
      // TODO: Change this if login page is moved.
      if (window.location.pathname !== '/') {
        window.location.pathname = '/';
      }

      return Object.assign({}, state, {
        status: true,
      });
    case actions.auth.logout.succeeded:
      window.location.pathname = '/';
      return Object.assign({}, state, {
        status: false,
      });
    case actions.auth.status.succeeded:
      return Object.assign({}, state, {
        status: action.data,
      });
    default:
      return state;
  }
}
