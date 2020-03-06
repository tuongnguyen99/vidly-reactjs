import React, { Component } from "react";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  validate = () => {};

  handleInputChange = ({ currentTarget }) => {
    this.setState({ [currentTarget.name]: currentTarget.value });
  };
  render() {
    return (
      <div className="container">
        <form>
          <h1>Login</h1>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              value={this.state.username}
              className="form-control"
              name="username"
              id="username"
              placeholder="Username"
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              className="form-control"
              name="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
