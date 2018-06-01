// TODO: JSDoc
export default function current(state, action) {
  if (!state) { state = {}; }

  state[action.data.userID] = action.data;

  return state;
}
