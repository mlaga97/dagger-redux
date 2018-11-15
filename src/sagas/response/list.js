// Library imports
import { call, put } from 'redux-saga/effects';
import axios from 'axios';

// Actions
import actions from '../../actions';

/**
 * Retrieves a list of all available responses.
 */
export default function* list(action) {
  try {
    let query = '';

    // Build the query based on the search parameters
    if (action.parameters && Object.keys(action.parameters).length > 0) {
      Object.keys(action.parameters).forEach((parameter) => {
        query += (query === '') ? '?' : '&';
        query += parameter + '=' + action.parameters[parameter];
      });
    }

    // Make the request
    const response = yield call(() => axios.get('/response' + query));

    yield put({
      type: actions.response.list.succeeded,
      data: response.data,
    });
  } catch (e) {
    yield put({
      type: actions.response.list.failed,
      message: e.message,
    });
  }
}
