// Library imports
import {takeLatest} from 'redux-saga/effects';

// Actions
import actions from '../../actions';

// Sagas
import list from './list.js';

// Export saga
export default function* userSaga() {
	yield takeLatest(actions.user.list.requested, list);
}
