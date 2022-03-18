import { call, all } from 'redux-saga/effects';

import counterSaga from './counter/sagas';
import postsSaga from './posts/sagas';

function* recoverable(...args) {
  while (true) {
    try {
      yield call(...args);
    } catch (error) {
      console.error(error);
    }
  }
}

export default function* rootSaga() {
  yield all([recoverable(counterSaga), recoverable(postsSaga)]);
}
