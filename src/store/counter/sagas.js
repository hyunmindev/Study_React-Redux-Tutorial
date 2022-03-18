import { all, delay, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { decrease, increase } from 'src/store/rootAction';
import { DECREASE_ASYNC, INCREASE_ASYNC } from 'src/store/rootActionType';

function* increaseSaga() {
  yield delay(1000);
  yield put(increase());
}

function* decreaseSaga() {
  yield delay(500);
  yield put(decrease());
}

export default function* counterSaga() {
  yield all([takeEvery(INCREASE_ASYNC, increaseSaga), takeLatest(DECREASE_ASYNC, decreaseSaga)]);
}
