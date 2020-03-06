import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./Input";

class Form extends Component {
  state = {
    data: {},
    errors: {}
  };

  validate = () => {
    const { data } = this.state;
    const option = { abortEarly: false };
    const { error } = Joi.validate(data, this.schema, option);
    if (!error) return null;
    const errors = {};
    error.details.forEach(value => {
      errors[value.path[0]] = value.message;
    });
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const schema = { [name]: this.schema[name] };
    const obj = { [name]: value };
    const { error } = Joi.validate(obj, schema);

    if (!error) return null;
    return error.details[0].message;
  };

  handleInputChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    const { errors } = this.state;

    const data = { ...this.state.data };
    data[name] = value;

    const error = this.validateProperty(currentTarget);
    if (error) {
      errors[name] = error;
    } else delete errors[name];

    this.setState({ data, errors });
  };

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    if (errors) {
      this.setState({ errors });
      return;
    }

    // Connect to server
    this.doSubmit();
  };

  renderInput = (name, label, type = "text") => {
    const { data, errors } = this.state;
    return (
      <Input
        name={name}
        label={label}
        type={type}
        onChange={this.handleInputChange}
        value={data[name]}
        error={errors[name]}
      />
    );
  };

  renderSubmit = label => {
    return (
      <button
        type="submit"
        className="btn btn-primary"
        disabled={this.validate()}
      >
        {label}
      </button>
    );
  };

  render() {
    return <div></div>;
  }
}

export default Form;
