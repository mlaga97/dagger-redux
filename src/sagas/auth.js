import {call, put, takeLatest} from 'redux-saga/effects';
import {AUTH_STATUS_REQUESTED, AUTH_STATUS_SUCCEEDED, AUTH_STATUS_FAILED} from '../actions/allActions.js';
import {AUTH_LOGIN_REQUESTED, AUTH_LOGIN_SUCCEEDED, AUTH_LOGIN_FAILED} from '../actions/allActions.js';
import {AUTH_LOGOUT_REQUESTED, AUTH_LOGOUT_SUCCEEDED, AUTH_LOGOUT_FAILED} from '../actions/allActions.js';

function* authStatus() {
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

function* authLogin(action) {
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

function* authLogout() {
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

function* authSaga() {
	yield takeLatest(AUTH_LOGIN_REQUESTED, authLogin);
	yield takeLatest(AUTH_LOGOUT_REQUESTED, authLogout);
	yield takeLatest(AUTH_STATUS_REQUESTED, authStatus);
}

export default authSaga;

