// TODO: JSDoc
export default function get(state, action) {
  if (!state) { state = {}; }

  state[action.data.userID] = action.data;

  return state;
}
