// Library imports
import {takeLatest} from 'redux-saga/effects';

// Actions
import {AUTH_LOGIN_REQUESTED, AUTH_LOGOUT_REQUESTED, AUTH_STATUS_REQUESTED} from '../../actions/allActions.js';

// Sagas
import login from './login';
import logout from './logout';
import status from './status';

// Export saga
export default function* authSaga() {
	yield takeLatest(AUTH_LOGIN_REQUESTED, login);
	yield takeLatest(AUTH_LOGOUT_REQUESTED, logout);
	yield takeLatest(AUTH_STATUS_REQUESTED, status);
}

