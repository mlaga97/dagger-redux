// TODO: JSDoc
export default function current(state, action) {
  return {
    ...state,
    [action.data.id]: action.data,
  };
}
