// Library imports
import {call, put} from 'redux-saga/effects'; 
import axios from 'axios';

// Actions
import actions from '../../actions';

/**
 * Retrieves data of all user IDs.
 */
export default function* all() { 
	try { 
		const response = yield call(() => { 
			return axios.get('/user/all');
		}) 

		yield put({ 
			type: actions.user.all.succeeded, 
			data: response.data, 
		}); 
	} catch(e) { 
		yield put({ 
			type: actions.user.all.failed, 
			message: e.message, 
		}); 
	} 
}
