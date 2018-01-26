import React from 'react'
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import routesConfig from './routes';
import UserRoute from '../../components/routes/UserRoute';
import GuestRoute from '../../components/routes/GuestRoute';
import Header from '../../components/Header';
import '../../assets/css/header.scss';

const Routers = ({history}) => (
  <ConnectedRouter history={history}>
    <div>
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
    </div>
  </ConnectedRouter>
)

export default Routers;