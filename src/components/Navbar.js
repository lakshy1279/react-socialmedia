import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    const { isLoggedin } = this.props.auth;
    return (
      <div>
        <nav className="nav">
          <div className="left-div">
            <img
              src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png"
              alt="logo"
            />
          </div>
          <div className="search-container">
            <img
              className="search-icon"
              src="https://image.flaticon.com/icons/svg/483/483356.svg"
              alt="search-icon"
            />
            <input placeholder="Search" />

            <div className="search-results">
              <ul>
                <li className="search-results-row">
                  <img
                    src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                    alt="user-dp"
                  />
                  <span>John Doe</span>
                </li>
                <li className="search-results-row">
                  <img
                    src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                    alt="user-dp"
                  />
                  <span>John Doe</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="right-nav">
            {isLoggedin && (
              <div className="user">
                <img
                  src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                  alt="user-dp"
                  id="user-dp"
                />
                <span>John Doe</span>
              </div>
            )}
            <div className="nav-links">
              <ul>
                {!isLoggedin ? (
                  <li>
                    <Link to="/login">Log in</Link>
                  </li>
                ) : (
                  <li>
                    <Link to="/logout">Log out</Link>
                  </li>
                )}
                <li>
                  <Link to="/signup">Register</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}
export default connect(mapStateToProps)(Navbar);
