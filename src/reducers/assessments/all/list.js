// TODO: JSDoc
export default function list(state, action) {
  const newState = {};

  // TODO: Document
  action.data.forEach((assessmentClass) => {
    if (assessmentClass in state || {}) {
      newState[assessmentClass] = state[assessmentClass];
    } else {
      newState[assessmentClass] = null;
    }
  });

  return newState;
}