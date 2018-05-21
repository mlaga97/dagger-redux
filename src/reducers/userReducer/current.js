// TODO: JSDoc
export default function current(state, action) {
	state[action.data.userID] = action.data;

	return state;
}
