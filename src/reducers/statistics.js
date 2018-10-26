// Get action list
import actions from '../actions';

// Handle some actions
export default function settings(state = null, action) {
  switch (action.type) {
    case actions.statistics.user.succeeded:
      return Object.assign({}, state, {
        user: action.data,
      });
    default:
      return state;
  }
}
