import { createReducer } from '@reduxjs/toolkit';

import { decrease, increase } from 'src/store/rootAction';

const initialState = {
  number: 0,
};

const reducer = createReducer(initialState, {
  [decrease]: (state) => ({
    ...state,
    number: state.number - 1,
  }),
  [increase]: (state) => ({
    ...state,
    number: state.number + 1,
  }),
});

export default reducer;
