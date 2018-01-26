import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from "react-helmet";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions  from '../store/actions/home';


import SectionHero from '../components/SectionHero';

class HomePage extends Component {

  state = {
    filter: {
      offset: 0,
      limit: 10
    }
  }

  componentDidMount() {
    // this.props.getPosts(this.state.filter);
  }

  render() {
    return [
      <Helmet key="Helmet">
        <title>react koa</title>
      </Helmet>,
      <SectionHero key="SectionHero" posts={this.props.posts} />
    ];
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getPosts: actions.getPosts
},dispatch)

HomePage.propTypes = {
  getPosts: PropTypes.func.isRequired,
  posts: PropTypes.shape({
    loading: PropTypes.bool,
    data: PropTypes.arrayOf(PropTypes.object)
  }).isRequired
};

export default connect(mapStateToProps,mapDispatchToProps)(HomePage)
