import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid, Segment, Responsive, Header } from 'semantic-ui-react';
import Loading from '../components/Loading';
import '../assets/css/homePage.scss';

const SectionHero = (props) => {
  if(props.posts.loading) {
    return <Loading />
  }

  return (
    <section className="hero">
      <Container fluid>
        <Grid>
          <Responsive as={Grid.Column} minWidth={768} tablet={4} computer={4}>
            <Segment>
              4
            </Segment>
          </Responsive>
          <Grid.Column mobile={16} tablet={12} computer={12}>
            <Segment>
            {
              props.posts.data.map(post => (
                <Header as='h1' key={post.attributes.id}>{ post.attributes.title }</Header>
              ))
            }
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    </section>
  )
}

SectionHero.propTypes = {
  posts: PropTypes.shape({
    loading: PropTypes.bool,
    data: PropTypes.arrayOf(PropTypes.object)
  }).isRequired
};

export default SectionHero;
