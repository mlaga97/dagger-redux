// Sagas
import authSaga from './auth';
import userSaga from './userData';

export default function* rootSaga() {
	yield [
		authSaga(),
		userSaga(),
	]
}
