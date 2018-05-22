// TODO: JSDoc
export default function get(state, action) {
	state[action.data.metadata.class] = action.data;

	return state;
}

