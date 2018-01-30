import React,{ Component } from 'react';
import { Container, Grid, Segment, Header, Divider } from 'semantic-ui-react';
import LoginForm from '../components/auth/LoginForm';
import '../assets/css/registerPage.scss';

class Login extends Component {
  componentDidMount() {
    // console.log(this.props);
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

export default Login
