// Library imports
import {takeLatest} from 'redux-saga/effects';

// Actions
import {ASSESSMENT_ALL_REQUESTED} from '../../actions/allActions.js';

// Sagas
import getAllAssessmentData from './all';

// Export saga
export default function* assessmentSaga() {
	yield takeLatest(ASSESSMENT_ALL_REQUESTED, getAllAssessmentData);
}

