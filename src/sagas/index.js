// Librart imports
import {all} from 'redux-saga/effects';

// Sagas
import assessmentSaga from './assessmentSaga';
import authSaga from './authSaga';
import clinicSaga from './clinicSaga';
import userSaga from './userSaga';

// Export saga
export default function* rootSaga() {
	yield all([
		assessmentSaga(),
		authSaga(),
		clinicSaga(),
		userSaga(),
	])
}
