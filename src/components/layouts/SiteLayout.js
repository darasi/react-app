import React from 'react';
import PropTypes from 'prop-types';

const SiteLayout = props => <React.Fragment>{props.children}</React.Fragment>;

SiteLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default SiteLayout;
