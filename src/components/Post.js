import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Comment } from './';
import { createComment, addLikeToStore } from '../actions/posts';
import { connect } from 'react-redux';
class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
    };
  }
  handleKeyPress = (e) => {
    const { comment } = this.state;
    const { post } = this.props;
    if (e.key === 'Enter') {
      this.props.dispatch(createComment(comment, post._id));
      //clear comment
      this.setState({
        comment: '',
      });
    }
  };
  handleChange = (e) => {
    this.setState({
      comment: e.target.value,
    });
  };
  handlePostLike = () => {
    const { post, user } = this.props;
    this.props.dispatch(addLikeToStore(post._id, 'Post', user._id));
  };
  render() {
    const { post, user } = this.props;
    const { comment } = this.state;
    const isPostLikeByUser = post.likes.includes(user._id);
    return (
      <div className="post-wrapper" key={post._id}>
        <div className="post-header">
          <div className="post-avatar">
            <Link to={`/user/${post.user._id}`}>
              <img
                src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                alt="user-pic"
              />
            </Link>
            <div>
              <span className="post-author">{post.user.name}</span>
              <span className="post-time">a minute ago</span>
            </div>
          </div>
          <div className="post-content">{post.content}</div>

          <div className="post-actions">
            <button className="post-like no-btn" onClick={this.handlePostLike}>
              {isPostLikeByUser ? (
                <img
                  src="https://image.flaticon.com/icons/svg/1076/1076984.svg"
                  alt="likes-icon"
                />
              ) : (
                <img
                  src="https://image.flaticon.com/icons/svg/1077/1077035.svg"
                  alt="likes-icon"
                />
              )}
              <span>{post.likes.length}</span>
            </button>

            <div className="post-comments-icon">
              <img
                src="https://image.flaticon.com/icons/svg/1380/1380338.svg"
                alt="comments-icon"
              />
              <span>{post.comments.length}</span>
            </div>
          </div>
          <div className="post-comment-box">
            <input
              placeholder="Start typing a comment"
              value={this.state.comment}
              onChange={this.handleChange}
              onKeyPress={this.handleKeyPress}
            />
          </div>
          <div className="post-comments-list">
            {post.comments.map((comment) => (
              <Comment comment={comment} key={comment._id} postId={post._id} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps({ auth }) {
  return {
    user: auth.user,
  };
}
export default connect(mapStateToProps)(Post);
