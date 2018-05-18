// Library imports
import {call, put} from 'redux-saga/effects'; 

// Actions
import {USER_LIST_SUCCEEDED, USER_LIST_FAILED} from '../../actions/allActions.js'; 

/**
 * Retrieve list of all user IDs
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
			type: USER_LIST_SUCCEEDED, 
			data: data, 
		}); 
	} catch(e) { 
		yield put({ 
			type: USER_LIST_FAILED, 
			message: e.message, 
		}); 
	} 
} 
