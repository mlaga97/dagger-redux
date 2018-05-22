// Library imports
import {takeLatest} from 'redux-saga/effects';

// Actions
import actions from '../../actions';

// Sagas
import all from './all';
import get from './get';
import list from './list';
import metadata from './metadata';

// Export saga
export default function* assessmentSaga() {
	yield takeLatest(actions.assessment.all.requested, all);
	yield takeLatest(actions.assessment.get.requested, get);
	yield takeLatest(actions.assessment.list.requested, list);
	yield takeLatest(actions.assessment.metadata.requested, metadata);
}

