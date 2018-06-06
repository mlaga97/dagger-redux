// Library imports
import { takeLatest } from 'redux-saga/effects';

// Actions
import actions from '../../actions';

// Sagas
import post from './post';

// Export saga
export default function* assessmentSaga() {
  yield takeLatest(actions.response.post.requested, post);
}
