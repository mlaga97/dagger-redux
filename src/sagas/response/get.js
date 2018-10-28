// Library imports
import { call, put } from 'redux-saga/effects';
import axios from 'axios';

// Actions
import actions from '../../actions';

/**
 * Retrieves data for all available responses.
 */
export default function* get(action) {
  try {
    const response = yield call(() => axios.get('/response/' + action.data));

    yield put({
      type: actions.response.get.succeeded,
      data: response.data,
    });
  } catch (e) {
    yield put({
      type: actions.response.get.failed,
      message: e.message,
    });
  }
}
