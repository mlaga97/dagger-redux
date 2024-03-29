// Library imports
import { takeLatest } from 'redux-saga/effects';

// Actions
import actions from '../../actions';

// Sagas
import all from './all';
import get from './get';
import list from './list';
import current from './current';

// Export saga
export default function* () {
  yield takeLatest(actions.user.all.requested, all);
  yield takeLatest(actions.user.current.requested, current);
  yield takeLatest(actions.user.get.requested, get);
  yield takeLatest(actions.user.list.requested, list);
}
