import { createReducer } from '@reduxjs/toolkit';

import { getPostsSuccess, getPostsError } from 'src/store/rootAction';

const initialState = {
  isLoading: false,
  data: [],
  error: null,
};

const reducer = createReducer(initialState, {
  [getPostsSuccess]: (state, { payload }) => ({
    ...state,
    isLoading: false,
    data: payload,
    error: null,
  }),
  [getPostsError]: (state, { payload }) => ({
    ...state,
    isLoading: false,
    error: payload,
  }),
});

export default reducer;
