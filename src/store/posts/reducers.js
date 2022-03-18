import { GET_POSTS_SUCCESS, GET_POSTS_ERROR } from 'src/store/rootActionType';

const initialState = {
  isLoading: false,
  data: [],
  error: null,
};

const reducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: payload,
        error: null,
      };
    case GET_POSTS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default reducer;
