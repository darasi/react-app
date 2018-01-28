import React from 'react';
import { Container, Grid, Segment, Responsive, Header } from 'semantic-ui-react';
import Loading from '../components/Loading';
import '../assets/css/homePage.scss';

const SectionHero = (props) => {
  if(props.users.loading && !props.users.data.data.length) {
    return <Loading />
  }

  return (
    <section className="hero">
      <Container fluid>
        <Grid>
          <Responsive as={Grid.Column} minWidth={768} tablet={4} computer={4}>
            <Segment>
              ქართული
            </Segment>
          </Responsive>
          <Grid.Column mobile={16} tablet={12} computer={12}>
            <Segment>
            {
              props.users.data.data.map(item => (
                <Header as='h1' key={ item.id }>{ item.name }</Header>
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