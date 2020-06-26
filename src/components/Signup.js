import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup, startSignup, clearAuthState } from '../actions/auth';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
      confirmPassword: '',
    };
  }
  componentWillUnmount() {
    this.props.dispatch(clearAuthState());
  }
  handleInputChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  };
  handleFormSubmit = (e) => {
    e.preventDefault();
    // console.log('this.emailInputRef', this.emailInputRef);
    // console.log('this.passwordInputRef', this.passwordInputRef);
    const { email, password, name, confirmPassword } = this.state;
    if (email && password && name && confirmPassword) {
      this.props.dispatch(startSignup());
      this.props.dispatch(signup(email, password, name, confirmPassword));
    }
    console.log('this.state', this.state);
  };
  render() {
    const { error, inProgress, isLoggedin } = this.props.auth;
    if (isLoggedin) {
      return <Redirect to="/" />;
    }
    return (
      <form className="login-form">
        <span className="login-signup-header">Sign Up</span>
        {error && <div className="alert error-dailog">{error}</div>}
        <div className="field">
          <input
            type="text"
            placeholder="Enter your name"
            required
            onChange={(e) => this.handleInputChange('name', e.target.value)}
          />
        </div>
        <div className="field">
          <input
            type="email"
            placeholder="Enter your email"
            required
            onChange={(e) => this.handleInputChange('email', e.target.value)}
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="password"
            required
            onChange={(e) => this.handleInputChange('password', e.target.value)}
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="Confirm password"
            required
            onChange={(e) =>
              this.handleInputChange('confirmPassword', e.target.value)
            }
          />
        </div>
        {inProgress ? (
          <div className="field">
            <button disabled={inProgress}>Sign Up</button>
          </div>
        ) : (
          <div className="field">
            <button onClick={this.handleFormSubmit}>Sign Up</button>
          </div>
        )}
      </form>
    );
  }
}
function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}
export default connect(mapStateToProps)(Signup);
