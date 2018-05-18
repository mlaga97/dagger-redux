// Library imports
import {takeLatest} from 'redux-saga/effects';

// Actions
import {USER_LIST_REQUESTED} from '../../actions/allActions.js';

// Sagas
import list from './list.js';

// Export saga
export default function* userSaga() {
	yield takeLatest(USER_LIST_REQUESTED, list);
}
