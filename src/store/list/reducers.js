import { PUSH, REPLACE } from 'src/store/rootActionType';

const initialState = {
  list: [],
};

const reducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case PUSH:
      return {
        ...state,
        list: [...state.list, payload],
      };
    case REPLACE:
      return {
        ...state,
        list: payload,
      };
    default:
      return state;
  }
};

export default reducer;
