// TODO: JSDoc
export default function list(state, action) {
	if(!state)
		state = {};

	let newState = {};

	// Copy data for any user IDs that are in the new list
	action.data.forEach((clinicID, index) => {
		if(clinicID in state) {
			newState[clinicID] = state[clinicID];
		} else {
			newState[clinicID] = null;
		}
	});

	return newState;
}
