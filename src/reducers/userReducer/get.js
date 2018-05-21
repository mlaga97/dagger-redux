// TODO: JSDoc
export default function get(state, action) {
	state[action.data.userID] = action.data;

	return state;
}

