// Library imports
import {call, put} from 'redux-saga/effects'; 

// Actions
import actions from '../../actions';

/**
 * Retrieves data of all clinic IDs.
 */
export default function* all() { 
	try { 
		const data = yield call(() => { 
			return fetch('http://dagger-local/api/v1/clinic/all', { 
					'credentials': 'include', 
				}) 
				.then(response => response.json()) 
				.then(data => data) 
				.catch(error => { 
					throw error 
				}); 
		}) 

		yield put({ 
			type: actions.clinic.all.succeeded, 
			data: data, 
		}); 
	} catch(e) { 
		yield put({ 
			type: actions.clinic.all.failed, 
			message: e.message, 
		}); 
	} 
}

