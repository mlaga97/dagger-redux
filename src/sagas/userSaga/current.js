// Library imports
import {call, put} from 'redux-saga/effects'; 

// Actions
import actions from '../../actions';

/**
 * Retrieves data of logged in user.
 */
export default function* current() { 
	try { 
		const data = yield call(() => { 
			return fetch('/user/current', { 
					'credentials': 'include', 
				}) 
				.then(response => response.json()) 
				.then(data => data) 
				.catch(error => { 
					throw error 
				}); 
		}) 

		yield put({ 
			type: actions.user.current.succeeded, 
			data: data, 
		}); 
	} catch(e) { 
		yield put({ 
			type: actions.user.current.failed, 
			message: e.message, 
		}); 
	} 
}
