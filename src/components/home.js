import React, { Component } from 'react';
import { PostList, FriendList, Chat } from './';
class Home extends Component {
  render() {
    const { posts, friends, isLoggedin } = this.props;
    return (
      <div className="home">
        <PostList posts={posts} />
        {isLoggedin && <FriendList friends={friends} />}
        {isLoggedin && <Chat />}
      </div>
    );
  }
}

export default Home;
