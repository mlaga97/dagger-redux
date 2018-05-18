// Library imports
import {call, put} from 'redux-saga/effects';

// Actions
import {AUTH_LOGOUT_SUCCEEDED, AUTH_LOGOUT_FAILED} from '../../actions/allActions.js';

/**
 * Logs user out of API.
 */
export default function* logout() {
	try {
		const data = yield call(() => {
			return fetch('http://dagger-local/api/v1/auth/logout', {
					method: 'POST',
					credentials: 'include',
				})
				.then(response => response.json())
				.then(data => data)
				.catch(error => {
					throw error
				});
		})

		yield put({
			type: AUTH_LOGOUT_SUCCEEDED,
			data: data,
		});
	} catch(e) {
		yield put({
			type: AUTH_LOGOUT_FAILED,
			message: e.message,
		});
	}
}

