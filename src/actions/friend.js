import { FETCH_USER_FRIENDS, ADD_FRIEND, REMOVE_FRIEND } from './actionTypes';
import { APIUrls } from '../helpers/urls';
import { getAuthTokenFromLocalStorage } from '../helpers/utilis';

export function fetchUserFriends(friends) {
  return {
    type: FETCH_USER_FRIENDS,
    friends,
  };
}
export function friends() {
  return (dispatch) => {
    // dispatch(startUserProfileFetch());
    const url = APIUrls.userFriends();
    fetch(url, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('friends', data);
        dispatch(fetchUserFriends(data.data.friends));
        return;
      });
    //   dispatch(userProfileFailure())
  };
}
export function addFriend(friend) {
  return {
    type: ADD_FRIEND,
    friend,
  };
}
export function removeFriend(userId) {
  return {
    type: REMOVE_FRIEND,
    userId,
  };
}
