import { combineReducers } from 'redux';
import posts from './post';
import auth from './auth';
import profile from './profile';
import friends from './friend';
export default combineReducers({
  posts,
  auth,
  profile,
  friends,
});
