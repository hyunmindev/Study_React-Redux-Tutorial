import { CHANGE_TEXT } from 'src/store/rootActionType';
import { createAction } from '@reduxjs/toolkit';

export const changeText = createAction(CHANGE_TEXT);
