import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { Button, Form } from "semantic-ui-react";
import FormErrors from '../FormErrors';
import * as actions  from '../../store/actions/auth';

class RegisterForm extends React.Component {
  state = {
    data: {
      name: "",
      email: "",
      password: ""
    },
    formErrors: {}
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ formErrors: nextProps.formErrors });
  }

  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  onSubmit = e => {
    e.preventDefault();
    this.props.register(this.state.data);
  };

  render() {
    const { data, formErrors } = this.state;
    const { auth } = this.props;

    return (
      <Form onSubmit={this.onSubmit}>
        <FormErrors formErrors={formErrors} />
        <Form.Field required>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={data.name}
            onChange={this.onChange}
            placeholder="Name"
            required
          />
        </Form.Field>
        <Form.Field required>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={data.email}
            onChange={this.onChange}
            placeholder="Email"
            required
          />
        </Form.Field>
        <Form.Field required>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={data.password}
            onChange={this.onChange}
            placeholder="Password"
            required
          />
        </Form.Field>
        <Button type="submit" fluid loading={auth.registerLoading}>Submit</Button>
      </Form>
    );
  }
}

RegisterForm.propTypes = {
  register: PropTypes.func.isRequired,
  auth: PropTypes.shape({
    isAuth: PropTypes.bool,
    loginLoading: PropTypes.bool,
    registerLoading: PropTypes.bool,
    data: PropTypes.object,
  }).isRequired,
  formErrors: PropTypes.shape({
    register: PropTypes.object
  }).isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  formErrors: state.formErrors.register,
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  register: actions.register,
},dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm)
