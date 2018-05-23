// Library imports
import {call, put} from 'redux-saga/effects';
import axios from 'axios';

// Actions
import actions from '../../actions';

/**
 * Retrieves list of available assessments.
 */
export default function* list() {
	try {
		const response = yield call(() => {
			return axios.get('/assessment');
		})

		yield put({
			type: actions.assessment.list.succeeded,
			data: response.data,
		});
	} catch(e) {
		yield put({
			type: actions.assessment.list.failed,
			message: e.message,
		});
	}
}

