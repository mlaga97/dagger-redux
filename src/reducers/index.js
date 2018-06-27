// Library imports
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// Reducers
import auth from './auth';
import users from './users';
import clinics from './clinics';
import responses from './responses';
import assessments from './assessments';

/*
All: all available objects, by id
Current: Contains the id of the object which applies to the user session
Selected: Contains the id of the object of interest

{
  assessments: { all, current, selected },
  clinics: { all, current, selected },
  users: { all, current, selected },
  visits: { all, current, selected },
  patients: { all, current, selected },
  responses: { all, current, selected },
  server: {
    version,
    auth: {},
    modules: {}
  },
  client: { version },
  analytics: {},
  auth: {},
}

*/

// Combine our reducers together
const rootReducer = combineReducers({
  assessments, // Assessments, by class
  auth, // Authentication information
  clinics, // Clinics, by ID
  // info,      // Information about the client and server
  // modules,   // Modules, by name
  responses, // Working area for current record
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
