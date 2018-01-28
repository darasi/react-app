import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions  from '../store/actions/home';
import '../assets/css/index.scss';

class User extends Component {

  componentDidMount() {
    this.props.getUsers({});
    console.log(this.props);
  }

  // handeModelClick() {
  //   import('./Model.js').then(({ default: Model }) => {
  //     console.log(Model)
  //   })
  // }

  render() {
    return (
      <React.Fragment>
        <Link to='/'>HOME PAGE</Link>
      </React.Fragment>
    )
  }
}

User.propTypes = {
  getUsers: PropTypes.func.isRequired,
  users: PropTypes.shape({
    loading: PropTypes.bool,
    data: PropTypes.arrayOf(PropTypes.object)
  }).isRequired
};

const mapStateToProps = (state) => ({
  count: state.counter.count,
  users: state.users
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  add: actions.add,
  getUsers: actions.getUsers
},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(User)
