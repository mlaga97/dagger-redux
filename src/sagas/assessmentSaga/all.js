// Library imports
import {call, put} from 'redux-saga/effects';
import axios from 'axios';

// Actions
import actions from '../../actions';

/**
 * Retrieves data for all available assessments.
 */
export default function* all() {
	try {
		const response = yield call(() => {
			return axios.get('/assessment/all');
		})

		yield put({
			type: actions.assessment.all.succeeded,
			data: response.data,
		});
	} catch(e) {
		yield put({
			type: actions.assessment.all.failed,
			message: e.message,
		});
	}
}

