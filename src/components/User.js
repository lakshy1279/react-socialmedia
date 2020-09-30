import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserProfile } from '../actions/profile';
import { APIUrls } from '../helpers/urls';
import { getAuthTokenFromLocalStorage } from '../helpers/utilis';
import { addFriend, removeFriend } from '../actions/friend';
class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: null,
      error: null,
      successMessage: null,
    };
  }
  componentWillMount() {
    console.log('user_id', this.props);
    const { match } = this.props.props;
    if (match.params.userId) {
      this.props.dispatch(fetchUserProfile(match.params.userId));
    }
  }
  componentDidUpdate(prevProps) {
    const {
      match: { params: prevParams },
    } = prevProps.props;
    const {
      match: { params: currParams },
    } = this.props.props;
    if (prevParams && currParams && prevParams.userId != currParams.userId) {
      this.props.dispatch(fetchUserProfile(currParams.userId));
    }
  }

  checkIfUserIsAFriend = () => {
    console.log('this.props', this.props);
    const { match } = this.props.props;
    const { friends } = this.props;
    const userId = match.params.userId;
    const index = friends.map((friend) => friend.to_user._id).indexOf(userId);
    if (index !== -1) {
      return true;
    }
    return false;
  };
  handleAddFriendClick = async () => {
    const userId = this.props.props.match.params.userId;
    const url = APIUrls.addFriend(userId, this.props.curr_user._id);
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
      },
    };
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    if (data.success) {
      this.setState({
        success: true,
        successMessage: 'Added Friend Successfully',
      });
      this.props.dispatch(addFriend(data.data.friendship));
    } else {
      this.setState({
        success: null,
        error: data.message,
      });
    }
  };
  handleRemoveFriendClick = async () => {
    const userId = this.props.props.match.params.userId;
    const url = APIUrls.removeFriend(userId);
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
      },
    };
    const response = await fetch(url, options);
    const data = await response.json();
    if (data.success) {
      this.setState({
        success: true,
        successMessage: 'Remove Friend Successfully',
      });
      this.props.dispatch(removeFriend(userId));
    } else {
      this.setState({
        success: null,
        error: data.message,
      });
    }
  };
  render() {
    const { profile } = this.props;
    const { success, error, successMessage } = this.state;
    const user = profile.user;
    const isUserAFriend = this.checkIfUserIsAFriend();
    if (profile.inProgress) {
      return <h1>Loading...</h1>;
    }
    console.log('props_user', this.props.props.match.params);
    return (
      <div className="settings">
        <div className="img-container">
          <img
            src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
            alt="user-dp"
            id="user-dp"
          />
        </div>
        <div className="field">
          <div className="field-label">Email</div>
          <div className="field-value">{user.email}</div>
        </div>
        <div className="field">
          <div className="field-label">Name</div>
          <div className="field-value">{user.name}</div>
        </div>
        <div className="btn-grp">
          {isUserAFriend ? (
            <button
              className="button edit-btn"
              onClick={this.handleRemoveFriendClick}
            >
              Remove Friend
            </button>
          ) : (
            <button
              className="button edit-btn"
              onClick={this.handleAddFriendClick}
            >
              Add Friend
            </button>
          )}
          {success && (
            <div className="alert sucess-dailog">{successMessage}</div>
          )}
          {error && <div className="alert error-dailog">{error}</div>}
        </div>
      </div>
    );
  }
}
function mapStateToProps({ profile, friends, auth }) {
  return {
    profile,
    friends,
    curr_user: auth.user,
  };
}
export default connect(mapStateToProps)(User);
