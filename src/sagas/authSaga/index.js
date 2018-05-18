// Library imports
import {takeLatest} from 'redux-saga/effects';

// Actions
import actions from '../../actions';

// Sagas
import login from './login';
import logout from './logout';
import status from './status';

// Export saga
export default function* authSaga() {
	yield takeLatest(actions.auth.login.requested, login);
	yield takeLatest(actions.auth.logout.requested, logout);
	yield takeLatest(actions.auth.status.requested, status);
}

