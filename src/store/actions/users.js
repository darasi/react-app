import * as constants from '../constants';
import Api from '../../api';

export const getUsers = () => async(dispatch) => {
  dispatch({ type: constants.REQUEST_USERS, data: { loading: true, errors: {} } });

  try {
    const d = await Api.user.getUsers();
    dispatch({ type: constants.REQUEST_USERS_SUCCESS, data: { loading: false, data: d } });
  } catch(err) {
    console.log(err);
    dispatch({ type: constants.REQUEST_USERS_FAIL, errors: err });
  }
}

export const register = (data) => async(dispatch) => {
  Api.user.register(data).then(res => {
    localStorage.jwt = res;
    // dispatch(userLoggedIn(user));
  });
}