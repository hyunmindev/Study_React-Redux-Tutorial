import { combineReducers } from 'redux';

import counter from './counter/reducers';
import text from './text/reducers';
import list from './list/reducers';

const rootReducer = combineReducers({
  counter,
  text,
  list,
});

export default rootReducer;
