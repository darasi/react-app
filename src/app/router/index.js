import React from 'react';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { IntlProvider } from 'react-intl';
import translation from '../../translation';
import routesConfig from './routes';
import Header from '../../components/Header';
import '../../assets/css/header.scss';

const Routers = ({history}) => (
  <IntlProvider locale="ka" messages={translation['ka']}>
    <ConnectedRouter history={history}>
      <React.Fragment>
        <Header/>
        {
          routesConfig.map(route => (
              <Route
                key={route.path}
                exact={route.exact}
                path={route.path}
                component={route.component}
                thunk={route.thunk}
              />
            )
          )
        }
        <footer>Copyright © 2017 Melon</footer>
      </React.Fragment>
    </ConnectedRouter>
  </IntlProvider>
)

export default Routers;