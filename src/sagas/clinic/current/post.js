// Library imports
import { call, put } from 'redux-saga/effects';
import axios from 'axios';

// Actions
import actions from '../../../actions';

/**
 * TODO: JSDocs
 */
export default function* post(action) {
  try {
    const response = yield call(() => axios.post('/clinic/current', action.data));

    yield put({
      type: actions.response.post.succeeded,
      data: response.data,
    });
  } catch (e) {
    yield put({
      type: actions.response.post.failed,
      message: e.message,
    });
  }
}
