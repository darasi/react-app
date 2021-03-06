import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from 'react-router-redux';
import thunkMiddleware from "redux-thunk";
import createHistory from 'history/createMemoryHistory';
import rootReducer from '../store/reducers/index';

const routerReducers = routerMiddleware(createHistory());
const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const middleware = [thunkMiddleware,routerReducers];

const configureStore = (initialState) => createStore(rootReducer,initialState,composeEnhancers(applyMiddleware(...middleware)));

export default configureStore;
