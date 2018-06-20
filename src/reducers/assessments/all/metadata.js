// TODO: JSDoc
export default function current(state, action) {
  const newState = {};

  // TODO: Document
  Object.keys(action.data).forEach((id) => {
    if (id in newState) {
      newState[id] = state[id];
    } else {
      newState[id] = {
        metadata: action.data[id],
      };
    }
  });

  return newState;
}
