import React,{ Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { Container, Grid, Segment, Header, Divider } from 'semantic-ui-react';
import LoginForm from '../components/auth/LoginForm';
import '../assets/css/registerPage.scss';

class Login extends Component {
  componentDidMount() {
    if(this.props.auth.isAuth) this.props.history.push('/');
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.auth.isAuth) this.props.history.push('/');
  }

  render() {
    return (
      <section className="root">
        <Container fluid>
          <Grid centered>
            <Grid.Column mobile={16} tablet={6} computer={6}>
							<Header as="h2" textAlign="center">LOGIN</Header>
							<Divider section />
              <Segment>
                <LoginForm />
              </Segment>
            </Grid.Column>
          </Grid>
        </Container>
      </section>
    )
  }
}

Login.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
})

const mapDispatchToProps = (dispatch) => bindActionCreators({},dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Login)
