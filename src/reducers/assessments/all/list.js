// TODO: JSDoc
export default function list(state, action) {
  const newState = {};

  // TODO: Document
  action.data.forEach((id) => {
    if (id in state || {}) {
      newState[id] = state[id];
    } else {
      newState[id] = null;
    }
  });

  return newState;
}
