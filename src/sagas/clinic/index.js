// Library imports
import { takeLatest } from 'redux-saga/effects';

// Actions
import actions from '../../actions';

// Sagas
import all from './all';
import current from './current';
import get from './get';
import list from './list';

// Export saga
export default function* () {
  yield takeLatest(actions.clinic.all.requested, all);
  yield takeLatest(actions.clinic.get.requested, get);
  yield takeLatest(actions.clinic.list.requested, list);
  yield current();
}
