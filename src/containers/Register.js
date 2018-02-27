import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, Grid, Segment, Header, Divider } from 'semantic-ui-react';
import { FormattedMessage as Tr } from 'react-intl';

import * as actions  from '../store/actions/auth';
import RegisterForm from '../components/auth/RegisterForm';
import FacebookLoginButton from '../components/shared/FacebookLoginButton';
import '../assets/css/registerPage.scss';

class Register extends Component {

  fbAuth = (result) => this.props.fbAuth(result);

  render() {
    return (
      <section className="root">
        <Container fluid>
          <Grid centered>
            <Grid.Column mobile={16} tablet={6} computer={6}>
              <Header as="h2" textAlign="center">
                REGISTER
              </Header>
              <Divider />
              <Segment>
                <FacebookLoginButton fbAuth={this.fbAuth} />
                <Divider horizontal>
                  <Tr id="or" />
                </Divider>
                <RegisterForm />
              </Segment>
            </Grid.Column>
          </Grid>
        </Container>
      </section>
    );
  }
}

Register.propTypes = {
  fbAuth: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators({
  fbAuth: actions.fbAuth,
}, dispatch);

export default connect(null, mapDispatchToProps)(Register);
