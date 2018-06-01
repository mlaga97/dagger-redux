// Library imports
import { call, put } from 'redux-saga/effects';
import axios from 'axios';

// Actions
import actions from '../../actions';

/**
 * Retrieves data of given user.
 */
export default function* get(action) {
  try {
    const response = yield call(() => axios.get(`/user/${action.data.userID}`));

    yield put({
      type: actions.user.get.succeeded,
      data: response.data,
    });
  } catch (e) {
    yield put({
      type: actions.user.get.failed,
      message: e.message,
    });
  }
}
