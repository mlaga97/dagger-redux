// Library imports
import { takeLatest } from 'redux-saga/effects';

// Actions
import actions from '../../actions';

// Sagas
import all from './all';
import post from './post';

// Export saga
export default function* () {
  yield takeLatest(actions.response.all.requested, all);
  yield takeLatest(actions.response.post.requested, post);
}
