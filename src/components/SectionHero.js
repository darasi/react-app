import React from 'react';
import { Container, Grid, Segment, Responsive, Header } from 'semantic-ui-react';
import { userIsAuthenticated } from '../components/hoc/ReduxAuthWrapper';
import Loading from '../components/Loading';
import '../assets/css/homePage.scss';

const UserDetails = userIsAuthenticated(({ data }) => (
  <React.Fragment>
    <h2>name: {data.name}</h2>
    <h2>email: {data.email}</h2>
  </React.Fragment>
));

const SectionHero = props => {
  const { auth, users } = props;

  if (users.loading && !users.data.data.length) {
    return <Loading />;
  }

  return (
    <section className="hero">
      <Container fluid>
        <Grid>
          <Responsive as={Grid.Column} minWidth={768} tablet={4} computer={4}>
            <Segment>
              <UserDetails data={auth.data} />
            </Segment>
          </Responsive>
          <Grid.Column mobile={16} tablet={12} computer={12}>
            <Segment>
              {users.data.data.map(item => (
                <Header as="h1" key={item.id}>
                  {item.name} - {item.email}
                </Header>
              ))}
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    </section>
  );
};

export default SectionHero;
