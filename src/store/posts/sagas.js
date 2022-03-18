import { all, call, put, takeLatest } from 'redux-saga/effects';
import { GET_POSTS, GET_POSTS_ERROR, GET_POSTS_SUCCESS } from 'src/store/rootActionType';

const fetchData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
};

function* getPostsSaga() {
  try {
    const data = yield call(fetchData);
    yield put({
      type: GET_POSTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: GET_POSTS_ERROR,
      payload: error,
    });
  }
}

export default function* postsSaga() {
  yield all([takeLatest(GET_POSTS, getPostsSaga)]);
}
