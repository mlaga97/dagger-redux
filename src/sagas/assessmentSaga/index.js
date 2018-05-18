// Library imports
import {takeLatest} from 'redux-saga/effects';

// Actions
import actions from '../../actions';

// Sagas
import getAllAssessmentData from './all';

// Export saga
export default function* assessmentSaga() {
	yield takeLatest(actions.assessment.all.requested, getAllAssessmentData);
}

