// Library imports
import {call, put} from 'redux-saga/effects';

// Actions
import actions from '../../actions';

/**
 * Retrieves metadata for all assessments.
 */
export default function* metadata() {
	try {
		const data = yield call(() => {
			return fetch('http://dagger-local/api/v1/assessment/short', {
					credentials: 'include',
				})
				.then(response => response.json())
				.then(data => data)
				.catch(error => {
					throw error
				});
		})

		yield put({
			type: actions.assessment.metadata.succeeded,
			data: data,
		});
	} catch(e) {
		yield put({
			type: actions.assessment.metadata.failed,
			message: e.message,
		});
	}
}

