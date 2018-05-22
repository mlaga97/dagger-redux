// TODO: JSDoc
export default function list(state, action) {
	let newState = {};

	// TODO: Document
	action.data.forEach((assessmentClass, index) => {
		if(assessmentClass in state) {
			newState[assessmentClass] = state[assessmentClass];
		} else {
			newState[assessmentClass] = null;
		}
	});

	return newState;
}

