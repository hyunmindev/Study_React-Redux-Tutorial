import { PUSH, REPLACE } from 'src/store/rootActionType';

export const push = (item) => ({
  type: PUSH,
  payload: item,
});

export const replace = (list) => ({
  type: REPLACE,
  payload: list,
});
