import React from 'react';
import { Link } from 'react-router-dom';
import { CreatePost, Post } from './';
import PropTypes from 'prop-types';
class PostList extends React.Component {
  render() {
    const { posts } = this.props;
    return (
      <div className="posts-list">
        <CreatePost />
        {posts.map((post) => (
          <Post post={post} key={post._id} />
        ))}
      </div>
    );
  }
}

export default PostList;
