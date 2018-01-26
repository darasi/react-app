import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import {
  auth,
  counter,
  homeInfo,
  posts
} from './home';

export default combineReducers({
  router: routerReducer,
  auth,
  counter,
  homeInfo,
  posts
})