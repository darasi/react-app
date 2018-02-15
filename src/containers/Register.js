import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, Grid, Segment, Header, Divider } from 'semantic-ui-react';
import RegisterForm from '../components/auth/RegisterForm';
import '../assets/css/registerPage.scss';

class Register extends Component {
  componentDidMount() {
    // if(this.props.auth.isAuth) this.props.history.push('/');
  }

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
  history: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Register);
