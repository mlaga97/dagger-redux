// Library imports
import { call, put } from 'redux-saga/effects';
import axios from 'axios';

// Actions
import actions from '../../actions';

/**
 * Retrieves data for all available responses.
 */
export default function* all() {
  try {
    const response = yield call(() => axios.get('/response/all'));

    yield put({
      type: actions.response.all.succeeded,
      data: response.data,
    });
  } catch (e) {
    yield put({
      type: actions.response.all.failed,
      message: e.message,
    });
  }
}
