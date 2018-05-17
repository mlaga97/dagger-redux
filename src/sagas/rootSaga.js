import {all} from 'redux-saga/effects';

// Sagas
import authSaga from './auth';
import userSaga from './userData';
import assessmentSaga from './assessment';

export default function* rootSaga() {
	yield all([
		authSaga(),
		userSaga(),
		assessmentSaga(),
	])
}
