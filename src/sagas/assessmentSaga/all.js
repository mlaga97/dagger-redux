// Library imports
import {call, put} from 'redux-saga/effects';

// Actions
import {ASSESSMENT_ALL_SUCCEEDED, ASSESSMENT_ALL_FAILED} from '../../actions/allActions.js';

/**
 * Retrieve data for all available assessments
 */
export default function* getAllAssessmentData() {
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
			type: ASSESSMENT_ALL_SUCCEEDED,
			data: data,
		});
	} catch(e) {
		yield put({
			type: ASSESSMENT_ALL_FAILED,
			message: e.message,
		});
	}
}
