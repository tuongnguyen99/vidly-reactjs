import React from "react";
import Form from "./common/Form";
import Joi from "joi-browser";

class Login extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit() {
    ///
    console.log("Sumited!");
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <h1>Login</h1>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderSubmit("Submit")}
        </form>
      </div>
    );
  }
}

export default Login;
