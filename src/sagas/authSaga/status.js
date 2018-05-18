// Library imports
import {call, put} from 'redux-saga/effects';

// Actions
import {AUTH_STATUS_SUCCEEDED, AUTH_STATUS_FAILED} from '../../actions/allActions.js';

/**
 * Retrieves the current login status of the user.
 */
export default function* status() {
	try {
		const data = yield call(() => {
			return fetch('http://dagger-local/api/v1/auth', {
					credentials: 'include',
				})
				.then(response => response.json())
				.then(data => data)
				.catch(error => {
					throw error
				});
		})

		yield put({
			type: AUTH_STATUS_SUCCEEDED,
			data: data,
		});
	} catch(e) {
		yield put({
			type: AUTH_STATUS_FAILED,
			message: e.message,
		});
	}
}

