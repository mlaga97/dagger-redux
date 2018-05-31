// Library imports
import {call, put} from 'redux-saga/effects'; 

// Actions
import actions from '../../actions';

/**
 * Retrieves data of all user IDs.
 */
export default function* all() { 
	try { 
		const data = yield call(() => { 
			return fetch('/user/all', { 
					'credentials': 'include', 
				}) 
				.then(response => response.json()) 
				.then(data => data) 
				.catch(error => { 
					throw error 
				}); 
		}) 

		yield put({ 
			type: actions.user.all.succeeded, 
			data: data, 
		}); 
	} catch(e) { 
		yield put({ 
			type: actions.user.all.failed, 
			message: e.message, 
		}); 
	} 
}
