import React from "react";
import Form from "./common/Form";
import Joi from "joi-browser";

class RegisterForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
      name: ""
    },
    errors: {}
  };
  schema = {
    username: Joi.string()
      .email()
      .required(),
    password: Joi.string()
      .min(4)
      .required(),
    name: Joi.string().required()
  };

  doSubmit = () => {
    //Connect to server
    console.log("Submitted!");
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <h1>Login</h1>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderSubmit("Submit")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
