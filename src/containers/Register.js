import React,{ Component } from 'react';
import { Container, Grid, Segment } from 'semantic-ui-react';
import RegisterForm from '../components/auth/RegisterForm';
import '../assets/css/registerPage.scss';


class Register extends Component {  
  componentDidMount() {
    // console.log(this.props);
  }
  
  render() {
    return (
      <section className="root">
        <Container fluid>
          <Grid centered>
            <Grid.Column mobile={16} tablet={6} computer={6}>
              <Segment>
                <RegisterForm />
              </Segment>
            </Grid.Column>
          </Grid>
        </Container>
      </section>
    )
  }
}

export default Register
