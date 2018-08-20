/* eslint-disable */
import { hydrate, render } from 'react-dom';
import Loadable from 'react-loadable';
import init from './translation/init';
import { configureStore, createApp } from './app/index';
import { getCurrentUser } from './store/actions/auth';
import { setLocale } from './store/actions/locale';

init();
const { store, history } = configureStore();
history.listen((location, action) => {
  window.scrollTo(0, 0);
});

if (localStorage.jwt) store.dispatch(getCurrentUser());
if (localStorage.lang) store.dispatch(setLocale(localStorage.lang));

const renderApp = () => {
  let application = createApp({ store, history });
  if (process.env.NODE_ENV === 'production') {
    hydrate(application, document.getElementById('root'));
  } else {
    render(application, document.getElementById('root'));
  }
};

window.main = () => {
  Loadable.preloadReady().then(() => {
    renderApp();
  });
  if (process.env.NODE_ENV === 'production') {
    (function() {
      if('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/service-worker.js');
      }
    })();
  }
};

if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept('./store/reducers/index.js', () => {
      let newReducer = require('./store/reducers/index.js');
      store.replaceReducer(newReducer);
      // import('./store/reducers/index').then(({default:module})=>{
      //   store.replaceReducer(module)
      // })
    });
    module.hot.accept('./app/index.js', () => {
      let { createApp } = require('./app/index.js');
      let newReducer = require('./store/reducers/index.js');
      store.replaceReducer(newReducer);
      let application = createApp({ store, history });
      hydrate(application, document.getElementById('root'));
      /*import('./app/index.js').then(({default:module})=>{
        let {createApp}=module;
        import('./store/reducers/index.js').then(({default:module})=>{
          store.replaceReducer(module)
          let application=createApp({store,history});
          render(application,document.getElementById('root'));
        })
      })*/
    });
  }
}
