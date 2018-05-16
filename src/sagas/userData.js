import {call, put, takeLatest} from 'redux-saga/effects';
import {USER_LIST_REQUESTED, USER_LIST_SUCCEEDED, USER_LIST_FAILED} from '../actions/allActions.js';

// TODO: Add login page
function* getUserList() {
	try {
		const data = yield call(() => {
			return fetch('http://dagger-local/api/v1/user', {
					'credentials': 'include',
				})
				.then(response => response.json())
				.then(data => data)
				.catch(error => {
					throw error
				});
		})

		yield put({
			type: USER_LIST_SUCCEEDED,
			data: data,
		});
	} catch(e) {
		yield put({
			type: USER_LIST_FAILED,
			message: e.message,
		});
	}
}

function* userSaga() {
	yield takeLatest(USER_LIST_REQUESTED, getUserList);
}

export default userSaga;

