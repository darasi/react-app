import React from 'react';
import { Container, Grid, Segment, Responsive, Header } from 'semantic-ui-react';
import Loading from '../components/Loading';
import '../assets/css/homePage.scss';

const SectionHero = (props) => {
  const { isAuth } = props.auth;

  if(props.users.loading && !props.users.data.data.length) {
    return <Loading />
  }

  return (
    <section className="hero">
      <Container fluid>
        <Grid>
          <Responsive as={Grid.Column} minWidth={768} tablet={4} computer={4}>
            <Segment>
              {isAuth &&
                <React.Fragment>
                  <h2>name: {props.auth.data.name}</h2>
                  <h2>email: {props.auth.data.email}</h2>
                </React.Fragment>
              }
            </Segment>
          </Responsive>
          <Grid.Column mobile={16} tablet={12} computer={12}>
            <Segment>
            {
              props.users.data.data.map(item => (
                <Header as='h1' key={ item.id }>{ item.name } - { item.email }</Header>
              ))
            }
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    </section>
  )
}

export default SectionHero;