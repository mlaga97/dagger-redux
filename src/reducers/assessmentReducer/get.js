// TODO: JSDoc
export default function get(state, action) {
  return {
    ...state,
    [action.data.metadata.class]: action.data,
  };
}
