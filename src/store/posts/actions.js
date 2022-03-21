import { createAction } from '@reduxjs/toolkit';
import { GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_ERROR } from 'src/store/rootActionType';

export const getPosts = createAction(GET_POSTS);
export const getPostsSuccess = createAction(GET_POSTS_SUCCESS);
export const getPostsError = createAction(GET_POSTS_ERROR);
