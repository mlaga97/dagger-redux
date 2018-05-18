// Librart imports
import {all} from 'redux-saga/effects';

// Sagas
import authSaga from './authSaga';
import userSaga from './userSaga';
import assessmentSaga from './assessmentSaga';

// Export saga
export default function* rootSaga() {
	yield all([
		authSaga(),
		userSaga(),
		assessmentSaga(),
	])
}
