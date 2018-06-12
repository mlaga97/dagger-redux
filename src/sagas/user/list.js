// Library imports
import { call, put } from 'redux-saga/effects';
import axios from 'axios';

// Actions
import actions from '../../actions';

/**
 * Retrieves list of all user IDs.
 */
export default function* list() {
  try {
    const response = yield call(() => axios.get('/user'));

    yield put({
      type: actions.user.list.succeeded,
      data: response.data,
    });
  } catch (e) {
    yield put({
      type: actions.user.list.failed,
      message: e.message,
    });
  }
}
