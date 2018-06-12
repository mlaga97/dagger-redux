// Library imports
import { call, put } from 'redux-saga/effects';
import axios from 'axios';

// Actions
import actions from '../../actions';

/**
 * Retrieves metadata for all assessments.
 */
export default function* metadata() {
  try {
    const response = yield call(() => axios.get('/assessment/short'));

    yield put({
      type: actions.assessment.metadata.succeeded,
      data: response.data,
    });
  } catch (e) {
    yield put({
      type: actions.assessment.metadata.failed,
      message: e.message,
    });
  }
}
