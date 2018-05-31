// Library imports
import {call, put} from 'redux-saga/effects'; 
import axios from 'axios';

// Actions
import actions from '../../actions';

/**
 * Retrieves data of logged in user.
 */
export default function* current() { 
	try { 
		const response = yield call(() => { 
			return axios.get('/user/current');
		}) 

		yield put({ 
			type: actions.user.current.succeeded, 
			data: response.data, 
		}); 
	} catch(e) { 
		yield put({ 
			type: actions.user.current.failed, 
			message: e.message, 
		}); 
	} 
}
