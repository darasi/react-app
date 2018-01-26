import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const UserRoute = ({ authRoute, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authRoute ? <Component {...props} /> : <Redirect to="/register" />
    }
  />
);

UserRoute.propTypes = {
  component: PropTypes.func.isRequired,
  authRoute: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    authRoute: !!state.auth.isAuth
  };
}

export default connect(mapStateToProps)(UserRoute);