import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from "react-helmet";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions  from '../store/actions/users';

import SectionHero from '../components/SectionHero';

class HomePage extends Component {

  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return [
      <Helmet key="Helmet">
        <title>react koa</title>
      </Helmet>,
      <SectionHero key="SectionHero" users={this.props.users} auth={this.props.auth}/>
    ];
  }
}

HomePage.propTypes = {
  auth: PropTypes.object,
  getUsers: PropTypes.func.isRequired,
  users: PropTypes.shape({
    loading: PropTypes.bool,
    errors: PropTypes.object,
    data: PropTypes.object
  }).isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  users: state.users
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getUsers: actions.getUsers
},dispatch)


export default connect(mapStateToProps,mapDispatchToProps)(HomePage)
