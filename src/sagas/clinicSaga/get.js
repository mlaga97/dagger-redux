// Library imports
import {call, put} from 'redux-saga/effects'; 
import axios from 'axios';

// Actions
import actions from '../../actions';

/**
 * Retrieves data of given clinic.
 */
export default function* get(action) { 
	try { 
		const response = yield call(() => {
			return axios.get('/clinic/' + action.data.clinicID);
		}) 

		yield put({ 
			type: actions.clinic.get.succeeded, 
			data: response.data, 
		}); 
	} catch(e) { 
		yield put({ 
			type: actions.clinic.get.failed, 
			message: e.message, 
		}); 
	} 
}

