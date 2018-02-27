import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, Grid, Segment, Header, Divider } from 'semantic-ui-react';
import { FormattedMessage as Tr } from 'react-intl';

import * as actions  from '../store/actions/auth';
import LoginForm from '../components/auth/LoginForm';
import FacebookLoginButton from '../components/shared/FacebookLoginButton';
import '../assets/css/registerPage.scss';

class Login extends Component {

  fbAuth = (result) => this.props.fbAuth(result);

  render() {
    return (
      <section className="root">
        <Container fluid>
          <Grid centered>
            <Grid.Column mobile={16} tablet={6} computer={6}>
              <Header as="h2" textAlign="center">
                LOGIN
              </Header>
              <Divider section />
              <Segment>
                <FacebookLoginButton fbAuth={this.fbAuth} />
                <Divider horizontal>
                  <Tr id="or" />
                </Divider>
                <LoginForm />
              </Segment>
            </Grid.Column>
          </Grid>
        </Container>
      </section>
    );
  }
}

Login.propTypes = {
  fbAuth: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators({
  fbAuth: actions.fbAuth,
}, dispatch);

export default connect(null, mapDispatchToProps)(Login);
