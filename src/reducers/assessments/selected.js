// Actions
import actions from '../../actions';

// Handle some actions
function selected(state = {}, action) {
  switch (action.type) {
    case actions.response.assessment.selected:
      return Object.assign({}, state, {
        [action.data]: true,
      });
    case actions.response.assessment.deselected:
      return Object.assign({}, state, {
        [action.data]: false,
      });
    default:
      return state;
  }
}

export default selected;
