// Library imports
import {call, put} from 'redux-saga/effects'; 
import axios from 'axios';

// Actions
import actions from '../../actions';

/**
 * Retrieves list of all clinic IDs.
 */
export default function* list() { 
	try { 
		const response = yield call(() => {
			return axios.get('/clinic');
		}) 

		yield put({ 
			type: actions.clinic.list.succeeded, 
			data: response.data, 
		}); 
	} catch(e) { 
		yield put({ 
			type: actions.clinic.list.failed, 
			message: e.message, 
		}); 
	} 
}

