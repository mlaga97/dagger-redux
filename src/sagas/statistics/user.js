// Library imports
import { call, put } from 'redux-saga/effects';
import axios from 'axios';

// Actions
import actions from '../../actions';

// TODO: Replace asap
export default function* getUser(action) {
  try {
    const response = yield call(() => axios.get('/statistics/user'));

    yield put({
      type: actions.statistics.user.succeeded,
      data: response.data,
    });
  } catch (e) {
    yield put({
      type: actions.statistics.user.failed,
      message: e.message,
    });
  }
}
