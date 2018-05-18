// Library imports
import {call, put} from 'redux-saga/effects';

// Actions
import actions from '../../actions';

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
			type: actions.auth.logout.succeeded,
			data: data,
		});
	} catch(e) {
		yield put({
			type: actions.auth.logout.failed,
			message: e.message,
		});
	}
}

