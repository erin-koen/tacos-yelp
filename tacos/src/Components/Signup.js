import React, { Component } from "react";
import { signup } from "../Actions/LoginAndSignup";
import { connect } from "react-redux";
import { Button } from 'reactstrap';

class Signup extends Component {
  state = {
    credentials: {
      username: "",
      password: ""
    },
  };

  handleChanges = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  signup = e => {
    e.preventDefault();
    this.props.signup(this.state.credentials)
    .then(()=> this.props.history.push('/restaurants'))
  };

  render() {
    return (
      <div className="login-div">
        <br />
        <br />
        <form onSubmit={this.signup}>
          <input
            name="username"
            type="text"
            placeholder="username"
            value={this.state.credentials.username}
            onChange={this.handleChanges}
          />
          <br />
          <br />
          <input
            name="password"
            type="password"
            placeholder="password"
            value={this.state.credentials.password}
            onChange={this.handleChanges}
          />
          <br />
          {this.props.error && <p className="error">{this.props.error}</p>}
          <br />
          <Button color="primary" type="submit">SIGN UP</Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggingIn: state.loggingIn,
  error: state.error,
  signingUp: state.signingUp
});

export default connect(
  mapStateToProps,
  { signup }
)(Signup);
