import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions  from '../store/actions/home';
import '../assets/css/index.scss';

class User extends Component {
  state = {
    Model: null
  };
  componentWillReceiveProps(nextProps) {
    if(!nextProps.auth.isAuth) this.props.history.push('/login');
  }

  handleImportModelClick = () => import('./Model').then(Model => this.setState({Model}));

  render() {
    const { Model } = this.state;

    return (
      <section className="root">
        <Link to='/'>HOME PAGE</Link>
        <button onClick={this.handleImportModelClick}>model</button>
        {Model && <Model />}
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
})
const mapDispatchToProps = (dispatch) => bindActionCreators({},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(User)
