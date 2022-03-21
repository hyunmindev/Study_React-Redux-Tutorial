import { all } from 'redux-saga/effects';

import counterSaga from './counter/sagas';
import postsSaga from './posts/sagas';

export default function* rootSaga() {
  yield all([counterSaga(), postsSaga()]);
}
