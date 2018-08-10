import React from 'react';
import PropTypes from 'prop-types';

const HomePage = ({ customer }) => 
  <section className="theme-2">WEEEEEEEEEEEEEEEEEEEEEEBSITE {customer.id}</section> 

HomePage.propTypes = {
  customer: PropTypes.object.isRequired,
};

export default HomePage;