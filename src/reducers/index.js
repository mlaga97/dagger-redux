// Library imports
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// Reducers
import assessments from './assessmentReducer';
import auth from './authReducer';
import clinics from './clinicReducer';
import response from './responseReducer';
import users from './userReducer';

/*
All: all available objects, by id
Current: Contains the id of the object which applies to the user session
Selected: Contains the id of the object of interest

{
  users: { all, current, selected },
  visits: { all, current, selected },
  clinics: { all, current, selected },
  patients: { all, current, selected },
  assessments: { all, current, selected },
  response: {
  },
  server: {
    version,
    auth: {},
    modules: {}
  },
  client: { version },
  analytics: {}
}

*/

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
