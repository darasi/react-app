import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunkMiddleware from 'redux-thunk';
import { createBrowserHistory, createMemoryHistory } from 'history';
import rootReducer from '../store/reducers/index';

export const isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

export default (url = '/') => {
  const initialState = !isServer ? window.__INITIAL_STATE__ : {};
  const history = isServer ? createMemoryHistory({ initialEntries: [url] }) : createBrowserHistory();
  const routerReducers = routerMiddleware(history);
  const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
  const middlewares = [thunkMiddleware, routerReducers];

  const store = createStore(connectRouter(history)(rootReducer),initialState,composeEnhancers(applyMiddleware(...middlewares)));

  return { store, history };
}
