// Library imports
import { call, put } from 'redux-saga/effects';
import axios from 'axios';

// Actions
import actions from '../../actions';

/**
 * Retrieves data of all clinic IDs.
 */
export default function* all() {
  try {
    const response = yield call(() => axios.get('/clinic/all'));

    yield put({
      type: actions.clinic.all.succeeded,
      data: response.data,
    });
  } catch (e) {
    yield put({
      type: actions.clinic.all.failed,
      message: e.message,
    });
  }
}
