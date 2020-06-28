import React, { Component } from 'react';
import { FriendListItem } from './';
class FriendList extends Component {
  render() {
    return (
      <div className="friends-list">
        <div className="header">Friends</div>
        {this.props.friends && this.props.friends.length === 0 && (
          <div className="no-friends">No friends found!</div>
        )}
        {/* //imp check arrow function */}
        {this.props.friends &&
          this.props.friends.map((friend) => (
            <FriendListItem friend={friend.to_user} key={friend._id} />
          ))}
      </div>
    );
  }
}

export default FriendList;
