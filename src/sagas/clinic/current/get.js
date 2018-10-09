// Library imports
import { call, put } from 'redux-saga/effects';
import axios from 'axios';

// Actions
import actions from '../../../actions';

/**
 * TODO: JSDocs
 */
export default function* get() {
  try {
    const response = yield call(() => axios.get('/clinic/current'));

    yield put({
      type: actions.clinic.current.get.succeeded,
      data: response.data,
    });
  } catch (e) {
    yield put({
      type: actions.clinic.current.get.failed,
      message: e.message,
    });
  }
}
