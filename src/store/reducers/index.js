import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { counter, homeInfo } from './home';
import users from './users';
import auth from './auth';
import locale from './locale';
import { formErrors } from './formErrors';
import checkout from './checkout';

export default combineReducers({
  router: routerReducer,
  auth,
  locale,
  counter,
  homeInfo,
  users,
  formErrors,
  checkout
})