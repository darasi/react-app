import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions  from '../store/actions/home';
import '../assets/css/index.scss';

class User extends Component {

  componentDidMount() {
    console.log(this.props);
  }

  // handeModelClick() {
  //   import('./Model.js').then(({ default: Model }) => {
  //     console.log(Model)
  //   })
  // }

  render() {
    return (
      <section>
        <Link to='/'>HOME PAGE</Link>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  count: state.counter.count,
  users: state.users
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  add: actions.add,
  getUsers: actions.getUsers
},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(User)
