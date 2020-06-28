import {
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAILURE,
  FETCH_USER_PROFILE,
} from '../actions/actionTypes';
const initalProfileState = {
  user: {},
  inProgress: false,
  success: null,
  error: null,
};
export default function profile(state = initalProfileState, action) {
  //{post:[]}
  switch (action.type) {
    case USER_PROFILE_SUCCESS:
      return {
        ...state,
        user: action.user,
        success: true,
        inProgress: false,
      };
    case USER_PROFILE_FAILURE:
      return {
        ...state,
        error: action.error,
        inProgress: false,
      };
    case FETCH_USER_PROFILE:
      return {
        ...state,
        inProgress: true,
      };
    default:
      return state;
  }
}
