import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import Loadable from 'react-loadable';
import Routers from './router/index';

import '../assets/css/index.scss';

const createApp = ({ store, history, modules }) => {
  if (process.env.NODE_ENV === 'production') {
    return (
      <Loadable.Capture report={moduleName => modules.push(moduleName)}>
        <Provider store={store}>
          <Routers history={history} />
        </Provider>
      </Loadable.Capture>
    );
  }
  // dev-server
  return (
    <Provider store={store}>
      <Routers history={history} />
    </Provider>
  );
};

createApp.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  modules: PropTypes.any.isRequired
};

export default createApp;
