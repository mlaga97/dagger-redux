import {all} from 'redux-saga/effects';

// Sagas
import authSaga from './auth';
import userSaga from './userData';

export default function* rootSaga() {
	yield all([
		authSaga(),
		userSaga(),
	])
}
