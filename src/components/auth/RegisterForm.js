import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button, Form } from 'semantic-ui-react';

class RegisterForm extends React.Component {
  state = {
    loading: false,
    data: {
      name: "",
      email: "",
      password: ""
    },
    errors: {}
  };

  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  onSubmit = e => {
    e.preventDefault();
    if (Object.keys(this.errors).length === 0) {
      this.setState({ loading: true });
      this.props
        .submit(this.state.data)
        .catch(err =>
          this.setState({ errors: err.response.data.errors, loading: false })
        );
    }
  };

  render() {
    const { data, errors, loading } = this.state;

    return (
      <Form onSubmit={this.onSubmit} loading={loading}>
        <Form.Field>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="name"
            name="name"
            value={data.name}
            onChange={this.onChange}
            placeholder='Name'
            required
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={data.email}
            onChange={this.onChange}
            placeholder='Email'
            required
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={data.password}
            onChange={this.onChange}
            placeholder='Password'
            required
          />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    );
  }
}

RegisterForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default RegisterForm;