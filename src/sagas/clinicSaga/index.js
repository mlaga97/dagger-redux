// Library imports
import { takeLatest } from 'redux-saga/effects';

// Actions
import actions from '../../actions';

// Sagas
import all from './all.js';
import get from './get.js';
import list from './list.js';

// Export saga
export default function* userSaga() {
  yield takeLatest(actions.clinic.all.requested, all);
  yield takeLatest(actions.clinic.get.requested, get);
  yield takeLatest(actions.clinic.list.requested, list);
}
