// Library imports
import { call, put } from 'redux-saga/effects';
import axios from 'axios';

// Actions
import actions from '../../actions';

/**
 * Retrieves the current login status of the user.
 */
export default function* status() {
  try {
    const response = yield call(() => axios.get('/auth'));

    yield put({
      type: actions.auth.status.succeeded,
      data: response.data,
    });
  } catch (e) {
    yield put({
      type: actions.auth.status.failed,
      message: e.message,
    });
  }
}
