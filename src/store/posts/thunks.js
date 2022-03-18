import { GET_POSTS, GET_POSTS_ERROR, GET_POSTS_SUCCESS } from 'src/store/rootActionType';

export const getPosts = () => async (dispatch) => {
  dispatch({ type: GET_POSTS });
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    setTimeout(() => {
      dispatch({ type: GET_POSTS_SUCCESS, payload: data });
    }, 500);
  } catch (error) {
    dispatch({ type: GET_POSTS_ERROR, payload: error });
  }
};
