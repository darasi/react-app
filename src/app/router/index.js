import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { IntlProvider } from 'react-intl';
import translation from '../../translation';
import routesConfig from './routes';

const AppRoute = ({ layout: Layout, ...rest }) => (
  <Layout>
    <Route {...rest} />
  </Layout>
);

class Routers extends PureComponent {
  render() {
    const { history, lang } = this.props;

    return (
      <IntlProvider locale={lang} messages={translation[lang]}>
        <ConnectedRouter history={history}>
          <Switch>
            {routesConfig.map(route => (
              <AppRoute
                key={route.path}
                exact={route.exact}
                path={route.path}
                component={route.component}
                thunk={route.thunk}
                layout={route.layout}
              />
            ))}
          </Switch>
        </ConnectedRouter>
      </IntlProvider>
    );
  }
}

Routers.propTypes = {
  history: PropTypes.object.isRequired,
  lang: PropTypes.string.isRequired
};

AppRoute.propTypes = {
  layout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  lang: state.locale.lang
});

export default connect(mapStateToProps, null)(Routers);
