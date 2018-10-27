// Library imports
import { call, put } from 'redux-saga/effects';
import axios from 'axios';

// Actions
import actions from '../../actions';

/**
 * Attempts to log the user in with the given username and password credentials.
 *
 * @param {Object} action - Action object.
 * @param {string} action.data.username - The username to attempt login with.
 * @param {string} action.data.password - The password to attempt login with.
 */
export default function* login(action) {
  const { succeeded, failed } = actions.auth.login;

  try {
    const response = yield call(() => axios.post('/auth/login', action.data));

    yield put({
      type: response.data.success ? succeeded : failed,
      data: response.data,
    });
  } catch (e) {
    yield put({
      type: failed,
      message: e.message,
    });
  }
}
