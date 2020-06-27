import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { Navbar, Home, Page404, Login, Signup, Settings } from './';
import * as jwtDecode from 'jwt-decode';
import { authenticateUser } from '../actions/auth';
import { getAuthTokenFromLocalStorage } from '../helpers/utilis';
const PrivateRoute = (privateRouteProps) => {
  const { isLoggedin, path, component: Component } = privateRouteProps;
  return (
    <Route
      path={path}
      render={(props) => {
        return isLoggedin ? (
          <Component props={props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: {
                from: props.location,
              },
            }}
          />
        );
      }}
    />
  );
};
class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());

    const token = getAuthTokenFromLocalStorage();
    if (token) {
      const user = jwtDecode(token);
      this.props.dispatch(
        authenticateUser({ email: user.email, _id: user._id, name: user.name })
      );
    }
  }
  render() {
    console.log('PROPS', this.props);
    const { posts, auth } = this.props;
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
            <PrivateRoute
              path="/setting"
              component={Settings}
              isLoggedin={auth.isLoggedin}
            />
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
    auth: state.auth,
  };
}
export default connect(mapStateToProps)(App);
