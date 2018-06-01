// TODO: JSDoc
export default function get(state, action) {
  if (!state) { state = {}; }

  state[action.data.id] = action.data;

  return state;
}
