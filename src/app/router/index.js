import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";
import { IntlProvider } from "react-intl";
import translation from "../../translation";
import routesConfig from "./routes";
import Header from "../../components/Header";
import "../../assets/css/header.scss";

class Routers extends PureComponent {
  render() {
    const { history, lang } = this.props;

    return (
      <IntlProvider locale={lang} messages={translation[lang]}>
        <ConnectedRouter history={history}>
          <React.Fragment>
            <Header />
            {routesConfig.map(route => (
              <Route
                key={route.path}
                exact={route.exact}
                path={route.path}
                component={route.component}
                thunk={route.thunk}
              />
            ))}
            <footer>Copyright © 2017 Melon</footer>
          </React.Fragment>
        </ConnectedRouter>
      </IntlProvider>
    );
  }
}

Routers.propTypes = {
  history: PropTypes.object.isRequired,
  lang: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  lang: state.locale.lang
});

export default connect(mapStateToProps, null)(Routers);
