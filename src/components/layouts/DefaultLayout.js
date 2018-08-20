import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import Footer from '../Footer';

const DefaultLayout = props => (
  <React.Fragment>
    <Header />
    {props.children}
    <Footer />
  </React.Fragment>
);

DefaultLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default DefaultLayout;
