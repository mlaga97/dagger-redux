// Library imports
import { takeLatest } from 'redux-saga/effects';

// Actions
import actions from '../../actions';

// Sagas
import all from './user';

// Export saga
export default function* () {
  yield takeLatest(actions.statistics.user.requested, all);
}
