import { combineReducers } from 'redux';

import number from './number/reducers';
import text from './text/reducers';

const rootReducer = combineReducers({
  number,
  text,
});

export default rootReducer;
