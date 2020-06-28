import {
  FETCH_USER_FRIENDS,
  ADD_FRIEND,
  REMOVE_FRIEND,
} from '../actions/actionTypes';
const initialFriendState = [];
export default function friends(state = initialFriendState, action) {
  switch (action.type) {
    case FETCH_USER_FRIENDS:
      return [...action.friends];
    case ADD_FRIEND:
      return state.concat(action.friend);
    case REMOVE_FRIEND:
      const newArr = state.filter(
        (friend) => friend.to_user._id !== action.userId
      );
      return newArr;
    default:
      return state;
  }
}
