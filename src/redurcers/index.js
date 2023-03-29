import { combineReducers } from 'redux';
import { postReducer } from './post.js';
import { userReducer } from './user';

const rootReducer = combineReducers({
  user: userReducer,
  post: postReducer,
});

export default rootReducer;
