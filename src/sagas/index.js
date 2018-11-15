// Librart imports
import { all } from 'redux-saga/effects';

// Sagas
import assessment from './assessment';
import auth from './auth';
import clinic from './clinic';
import response from './response';
import user from './user';

// Export saga
export default function* () {
  yield all([
    assessment(),
    auth(),
    clinic(),
    response(),
    user(),
  ]);
}
