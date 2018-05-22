// Library imports
import {call, put} from 'redux-saga/effects';

// Actions
import actions from '../../actions';

/**
 * Retrieves data for all available assessments.
 */
export default function* all() {
	try {
		const data = yield call(() => {
			return fetch('http://dagger-local/api/v1/assessment/all', {
					credentials: 'include',
				})
				.then(response => response.json())
				.then(data => data)
				.catch(error => {
					throw error
				});
		})

		yield put({
			type: actions.assessment.all.succeeded,
			data: data,
		});
	} catch(e) {
		yield put({
			type: actions.assessment.all.failed,
			message: e.message,
		});
	}
}
