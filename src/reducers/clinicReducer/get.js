// TODO: JSDoc
export default function get(state, action) {
	state[action.data.id] = action.data;

	return state;
}

