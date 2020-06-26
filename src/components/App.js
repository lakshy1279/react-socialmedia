import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { Navbar, Home, Page404, Login, Signup } from './';
import * as jwtDecode from 'jwt-decode';
import { authenticateUser } from '../actions/auth';
class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());

    const token = localStorage.getItem('token');
    if (token) {
      const user = jwtDecode(token);
      this.props.dispatch(
        authenticateUser({ email: user.email, _id: user._id, name: user.name })
      );
    }
  }

  render() {
    console.log('PROPS', this.props);
    const { posts } = this.props;
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => {
                return <Home {...props} posts={posts} />;
              }}
            />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route component={Page404} />
          </Switch>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}
export default connect(mapStateToProps)(App);
