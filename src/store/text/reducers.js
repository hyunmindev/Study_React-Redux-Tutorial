import { CHANGE_TEXT } from 'src/store/rootActionType';

const initialState = {
  text: '',
};

const reducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case CHANGE_TEXT:
      return {
        ...state,
        text: payload,
      };
    default:
      return state;
  }
};

export default reducer;
