import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/auth';
import logger from 'redux-logger';
import { func } from 'prop-types';

class Login extends Component {
  constructor(props) {
    super(props);
    // this.emailInputRef = React.createRef();
    // this.passwordInputRef = React.createRef();
    this.state = {
      email: '',
      password: '',
    };
  }
  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  handleFormSubmit = (e) => {
    e.preventDefault();
    // console.log('this.emailInputRef', this.emailInputRef);
    // console.log('this.passwordInputRef', this.passwordInputRef);
    const { email, password } = this.state;
    if (email && password) {
      this.props.dispatch(login(email, password));
    }
    console.log('this.state', this.state);
  };
  render() {
    const { error, inProgress } = this.props.auth;
    return (
      <form className="login-form">
        <span className="login-signup-header">Log In</span>
        {error && <div className="alert error-dailog">{error}</div>}
        <div className="field">
          <input
            type="email"
            placeholder="Email"
            required
            onChange={this.handleEmailChange}
            // ref={this.emailInputRef}
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="password"
            required
            onChange={this.handlePasswordChange}
            // ref={this.passwordInputRef}
          />
        </div>
        <div className="field">
          {inProgress ? (
            <button onClick={this.handleFormSubmit} disabled={inProgress}>
              Logging In
            </button>
          ) : (
            <button onClick={this.handleFormSubmit}>Log In</button>
          )}
        </div>
      </form>
    );
  }
}
function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}
export default connect(mapStateToProps)(Login);
