import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const GuestRoute = ({ guestRoute, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !guestRoute ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )}
  />
);

GuestRoute.propTypes = {
  component: PropTypes.func.isRequired,
  guestRoute: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    guestRoute: !!state.auth.isAuth
  };
}

export default connect(mapStateToProps)(GuestRoute);