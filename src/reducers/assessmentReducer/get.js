// TODO: JSDoc
export default function get(state, action) {
  if (!state) { state = {}; }

  state[action.data.metadata.class] = action.data;

  return state;
}
