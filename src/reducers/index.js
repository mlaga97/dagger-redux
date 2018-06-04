// Library imports
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// Reducers
import assessments from './assessmentReducer';
import auth from './authReducer';
import clinics from './clinicReducer';
import response from './responseReducer';
import users from './userReducer';

// Combine our reducers together
const rootReducer = combineReducers({
  assessments, // Assessments, by class
  auth, // Authentication information
  clinics, // Clinics, by ID
  // info,      // Information about the client and server
  // modules,   // Modules, by name
  response, // Working area for current record
  users, // Users, by ID
  form: formReducer.plugin({
    loginForm: (state, action) => {
      switch (action.type) {
        default:
          return state;
      }
    },
  }),
});

export default rootReducer;
