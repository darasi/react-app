import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Form, Transition } from 'semantic-ui-react';
import * as actions from '../../store/actions/auth';

class LoginForm extends React.Component {
  state = {
    data: {
      email: '',
      password: ''
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
    this.props.login(this.state.data);
  };

  Errors = () => (
    <React.Fragment>
      <Transition>
        <div className="error-message">
          <div className="text">Invalid credentials</div>
        </div>
      </Transition>
    </React.Fragment>
  );

  render() {
    const { data, formErrors } = this.state;
    const { auth } = this.props;
    const { Errors } = this;
    const isButtonDisabled = !data.email || !data.password;

    return (
      <Form onSubmit={this.onSubmit}>
        {formErrors.code && <Errors />}
        <Form.Field>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={data.email}
            onChange={this.onChange}
            placeholder="Email"
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
            placeholder="Password"
          />
        </Form.Field>
        <Button type="submit" disabled={isButtonDisabled} fluid loading={auth.loginLoading}>
          LOGIN
        </Button>
      </Form>
    );
  }
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
  auth: PropTypes.shape({
    isAuth: PropTypes.bool,
    loginLoading: PropTypes.bool,
    registerLoading: PropTypes.bool,
    data: PropTypes.object
  }).isRequired,
  formErrors: PropTypes.shape({
    login: PropTypes.object
  }).isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  formErrors: state.formErrors.login
});

const mapDispatchToProps = dispatch => bindActionCreators({
  login: actions.login
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
