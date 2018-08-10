import { combineReducers } from 'redux';
import { counter, homeInfo } from './home';
import users from './users';
import auth from './auth';
import locale from './locale';
import { formErrors } from './formErrors';
import checkout from './checkout';
import site from './site';

export default combineReducers({
  auth,
  locale,
  counter,
  homeInfo,
  users,
  formErrors,
  checkout,
  site,
})