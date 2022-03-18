import { DECREASE, INCREASE } from 'src/store/rootActionType';

const initialState = {
  number: 0,
};

const reducer = (state = initialState, { type } = {}) => {
  switch (type) {
    case INCREASE:
      return {
        ...state,
        number: state.number + 1,
      };
    case DECREASE:
      return {
        ...state,
        number: state.number - 1,
      };
    default:
      return state;
  }
};

export default reducer;
