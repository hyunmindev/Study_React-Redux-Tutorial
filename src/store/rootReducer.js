import { combineReducers } from 'redux';

import counter from './counter/reducers';
import text from './text/reducers';
import posts from './posts/reducers';

const rootReducer = combineReducers({
  counter,
  text,
  posts,
});

export default rootReducer;
