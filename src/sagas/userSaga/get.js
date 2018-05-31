// Library imports
import {call, put} from 'redux-saga/effects'; 

// Actions
import actions from '../../actions';

/**
 * Retrieves data of given user.
 */
export default function* get(action) { 
	try { 
		const data = yield call(() => { 
			return fetch('/api/v1/user/' + action.data.userID, { 
					'credentials': 'include', 
				}) 
				.then(response => response.json()) 
				.then(data => data) 
				.catch(error => { 
					throw error 
				}); 
		}) 

		yield put({ 
			type: actions.user.get.succeeded, 
			data: data, 
		}); 
	} catch(e) { 
		yield put({ 
			type: actions.user.get.failed, 
			message: e.message, 
		}); 
	} 
}
