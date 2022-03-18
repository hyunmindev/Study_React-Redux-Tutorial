import { combineReducers } from 'redux';

import counter from './counter/reducers';
import text from './text/reducers';

const rootReducer = combineReducers({
  counter,
  text,
});

export default rootReducer;
