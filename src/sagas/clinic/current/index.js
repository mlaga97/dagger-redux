// Library imports
import { takeLatest } from 'redux-saga/effects';

// Actions
import actions from '../../../actions';

// Sagas
import get from './get';
import post from './post';

// Export saga
export default function* () {
  yield takeLatest(actions.clinic.current.get.requested, get);
  yield takeLatest(actions.clinic.current.post.requested, post);
}
