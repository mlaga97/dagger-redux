// TODO: JSDoc
export default function get(state, action) {
  return {
    ...state,
    [action.data.id]: action.data,
  };
}
