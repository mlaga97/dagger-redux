// Library imports
import {call, put} from 'redux-saga/effects';

// Actions
import actions from '../../actions';

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
			type: actions.auth.status.succeeded,
			data: data,
		});
	} catch(e) {
		yield put({
			type: actions.auth.status.failed,
			message: e.message,
		});
	}
}

