const API_ROOT = 'http://codeial.com:8000/api/v2';
const API_ROOT1 = 'http://localhost:7000/api/v1';
export const APIUrls = {
  login: () => `${API_ROOT1}/user/create-session`,
  editProfile: () => `${API_ROOT1}/user/edit`,
  signup: () => `${API_ROOT1}/user/signup`,
  fetchPosts: (page = 1, limit = 5) =>
    `${API_ROOT1}/posts?page=${page}&limit=${limit}`,
  userProfile: (userId) => `${API_ROOT1}/user/fetch/${userId}`,
  userFriends: () => `${API_ROOT1}/friendship/fetch_user_friends`,
  addFriend: (userId, curr_user) =>
    `${API_ROOT1}/friendship/create_friendship?user_id=${userId}&curr_user=${curr_user}`,
  removeFriend: (userId) =>
    `${API_ROOT1}/friendship/remove_friendship?user_id=${userId}`,
  createPost: () => `${API_ROOT1}/posts/create`,
  createComment: () => `${API_ROOT1}/comments`,
  toggleLike: (id, likeType) =>
    `${API_ROOT1}/likes/toggle?id=${id}&type=${likeType}`,
  userSearch: (searchText) => `${API_ROOT1}/user/search?text=${searchText}`,
};
