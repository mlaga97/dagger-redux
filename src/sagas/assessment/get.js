// Library imports
import { call, put } from 'redux-saga/effects';
import axios from 'axios';

// Actions
import actions from '../../actions';

/**
 * Retrieves data for selected assessment.
 */
export default function* get(action) {
  try {
    const url = `/assessment/${action.data.assessmentClass}`;
    const response = yield call(() => axios.get(url));

    yield put({
      type: actions.assessment.get.succeeded,
      data: response.data,
    });
  } catch (e) {
    yield put({
      type: actions.assessment.get.failed,
      message: e.message,
    });
  }
}
