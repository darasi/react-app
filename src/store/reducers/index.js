import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { counter, homeInfo } from './home';
import users from './users';
import auth from './auth';
import { formErrors } from './formErrors';

export default combineReducers({
  router: routerReducer,
  auth,
  counter,
  homeInfo,
  users,
  formErrors
})