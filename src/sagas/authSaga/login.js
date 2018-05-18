// Library imports
import {call, put} from 'redux-saga/effects';

// Actions
import actions from '../../actions';

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
			type: data === 'Authentication succeeded!' ? actions.auth.login.succeeded : actions.auth.login.failed,
			data: data,
		});
	} catch(e) {
		yield put({
			type: actions.auth.login.failed,
			message: e.message,
		});
	}
}

