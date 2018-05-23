// Library imports
import {call, put} from 'redux-saga/effects';
import axios from 'axios';

// Actions
import actions from '../../actions';

/**
 * Logs user out of API.
 */
export default function* logout() {
	try {
		const response = yield call(() => {
			return axios.post('/auth/logout');
		})

		yield put({
			type: actions.auth.logout.succeeded,
			data: response.data,
		});
	} catch(e) {
		yield put({
			type: actions.auth.logout.failed,
			message: e.message,
		});
	}
}

