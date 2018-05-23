// TODO: JSDoc
export default function list(state, action) {
	if(!state)
		state = {};

	let newState = {};

	// Copy data for any user IDs that are in the new list
	action.data.forEach((userID, index) => {
		if(userID in state) {
			newState[userID] = state[userID];
		} else {
			newState[userID] = null;
		}
	});

	return newState;
}

