// Library imports
import {call, put} from 'redux-saga/effects'; 

// Actions
import actions from '../../actions';

/**
 * Retrieves list of all user IDs.
 */
export default function* list() { 
	try { 
		const data = yield call(() => { 
			return fetch('http://dagger-local/api/v1/user', { 
					'credentials': 'include', 
				}) 
				.then(response => response.json()) 
				.then(data => data) 
				.catch(error => { 
					throw error 
				}); 
		}) 

		yield put({ 
			type: actions.user.list.succeeded, 
			data: data, 
		}); 
	} catch(e) { 
		yield put({ 
			type: actions.user.list.failed, 
			message: e.message, 
		}); 
	} 
}
