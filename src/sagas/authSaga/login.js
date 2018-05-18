// Library imports
import {call, put} from 'redux-saga/effects';

// Actions
import {AUTH_LOGIN_SUCCEEDED, AUTH_LOGIN_FAILED} from '../../actions/allActions.js';

/**
 * Attempts to log the user in with the given username and password credentials.
 *
 * @param {Object} action - Action object.
 * @param {string} action.data.username - The username to attempt login with.
 * @param {string} action.data.password - The password to attempt login with.
 */
export default function* login(action) {
	try {
		const data = yield call(() => {
			return fetch('http://dagger-local/api/v1/auth/login', {
					method: 'POST',
					body: JSON.stringify(action.data),
					credentials: 'include',
				})
				.then(response => response.json())
				.then(data => data)
				.catch(error => {
					throw error
				});
		})

		yield put({
			type: data === 'Authentication succeeded!' ? AUTH_LOGIN_SUCCEEDED : AUTH_LOGIN_FAILED,
			data: data,
		});
	} catch(e) {
		yield put({
			type: AUTH_LOGIN_FAILED,
			message: e.message,
		});
	}
}

