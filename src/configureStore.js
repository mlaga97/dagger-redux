// Library imports
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

// Sagas
import rootSaga from './sagas';

// Reducers
import rootReducer from './reducers';

// Configure the store to use thunk, saga, and devtool extensions
export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(sagaMiddleware),
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
