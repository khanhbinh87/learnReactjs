import { combineReducers } from 'redux'

import userReducer from './user/reducer';
import blogReducer from './blog/reducer';

const reducer = combineReducers({
  User: userReducer,
  Blog: blogReducer
});

export default reducer;