import { DECREASE, DECREASE_ASYNC, INCREASE, INCREASE_ASYNC } from 'src/store/rootActionType';

export const increase = () => ({
  type: INCREASE,
});

export const decrease = () => ({
  type: DECREASE,
});

export const increaseAsync = () => ({
  type: INCREASE_ASYNC,
});

export const decreaseAsync = () => ({
  type: DECREASE_ASYNC,
});
