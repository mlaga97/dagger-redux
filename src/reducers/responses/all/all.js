// TODO: JSDoc
// TODO: This is a memory leak!
export default function all(state, action) {
  return {
    ...state,
    ...action.data,
  }
}
