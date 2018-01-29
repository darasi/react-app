import { hydrate } from 'react-dom';
import Loadable from 'react-loadable';
import createHistory from 'history/createMemoryHistory';
import app from './app/index';

import { getCurrentUser } from './store/actions/auth';

const initialState = window && window.__INITIAL_STATE__;
const history = createHistory()
const { configureStore, createApp } = app;
const store = configureStore(initialState);

if (localStorage.jwt) store.dispatch(getCurrentUser());

const renderApp = () => {
  const application = createApp({ store, history });
  hydrate(application, document.getElementById('root'));
}

window.main = () => {
  Loadable.preloadReady().then(() => {
    renderApp()
  });
};

if(process.env.NODE_ENV === 'development') {
  if(module.hot){
    module.hot.accept('./store/reducers/index.js',() => {
      // const newReducer = require('./store/reducers/index.js');
      // store.replaceReducer(newReducer)
      import('./store/reducers/index.js').then(({default:module})=>{
        store.replaceReducer(module)
      })
    })
    module.hot.accept('./app/index.js',() => {
      let { createApp } = require('./app/index.js');
      const newReducer = require('./store/reducers/index.js');
      store.replaceReducer(newReducer);
      let application = createApp({ store,history });
      hydrate(application,document.getElementById('root'));

        // let {createApp}=module;
        // import('./store/reducers/index.js').then(({default:module})=>{
          // store.replaceReducer(module);
          // renderApp();
          // let application=createApp({store,history});
          // render(application,document.getElementById('root'));
        // })
    })
  }
}



