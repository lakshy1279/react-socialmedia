import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserProfile } from '../actions/profile';
class User extends Component {
  componentWillMount() {
    console.log('user_id', this.props);
    const { match } = this.props.props;
    if (match.params.userId) {
      this.props.dispatch(fetchUserProfile(match.params.userId));
    }
  }

  render() {
    const { profile } = this.props;
    const user = profile.user;
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
        <button className="button edit-btn">Add Friend</button>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    profile: state.profile,
  };
}
export default connect(mapStateToProps)(User);
