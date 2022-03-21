import { createReducer } from '@reduxjs/toolkit';

import { changeText } from 'src/store/rootAction';

const initialState = {
  text: '',
};

const reducer = createReducer(initialState, {
  [changeText]: (state, { payload }) => ({
    ...state,
    text: payload,
  }),
});

export default reducer;
