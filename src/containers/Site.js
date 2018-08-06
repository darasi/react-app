import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Loadable from 'react-loadable';
import * as actions from '../store/actions/site';

const HomePage1 = Loadable({
    loader: () => import(/* webpackChunkName: 'SiteHomePage1' */`../themes/1/HomePage`),
    loading: () => null,
});

class Site extends Component { 
  componentDidMount() {
    if(this.props.site.fetched === false) this.props.getInfo(this.props.match.params.site);
  }

  render() {
    const { site } = this.props;

    switch(site.customer.id) {
      case 1:
        return <HomePage1 customer={site.customer} />
      default:
        return null;
    }
  }
}

Site.propTypes = {
  getInfo: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  site: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  site: state.site,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getInfo: actions.getInfo
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Site);
