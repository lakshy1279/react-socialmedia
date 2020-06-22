import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { PostList, Navbar, Home, Page404 } from './';
class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
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
            {/* <Route path="/login" component={login} />
            <Route path="/signup" component={signup}/> */}
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
