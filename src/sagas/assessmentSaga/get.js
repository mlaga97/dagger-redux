// Library imports
import {call, put} from 'redux-saga/effects';

// Actions
import actions from '../../actions';

/**
 * Retrieves data for selected assessment.
 */
export default function* get(action) {
	try {
		const data = yield call(() => {
			return fetch('http://dagger-local/api/v1/assessment/' + action.data.assessmentClass, {
					credentials: 'include',
				})
				.then(response => response.json())
				.then(data => data)
				.catch(error => {
					throw error
				});
		})

		yield put({
			type: actions.assessment.get.succeeded,
			data: data,
		});
	} catch(e) {
		yield put({
			type: actions.assessment.get.failed,
			message: e.message,
		});
	}
}

