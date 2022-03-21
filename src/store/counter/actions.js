import { DECREASE, DECREASE_ASYNC, INCREASE, INCREASE_ASYNC } from 'src/store/rootActionType';
import { createAction } from '@reduxjs/toolkit';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
export const increaseAsync = createAction(INCREASE_ASYNC);
export const decreaseAsync = createAction(DECREASE_ASYNC);
