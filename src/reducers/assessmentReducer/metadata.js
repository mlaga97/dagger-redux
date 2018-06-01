// TODO: JSDoc
export default function current(state, action) {
  const newState = {};

  // TODO: Document
  Object.keys(action.data).forEach((assessmentClass, index) => {
    if (assessmentClass in newState) {
      newState[assessmentClass] = state[assessmentClass];
    } else {
      newState[assessmentClass] = {
        metadata: action.data[assessmentClass],
      };
    }
  });

  return newState;
}
