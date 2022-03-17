import { CHANGE_TEXT } from 'src/store/rootActionType';

export const changeText = (text) => ({
  type: CHANGE_TEXT,
  payload: text,
});
