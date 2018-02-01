import * as constants from '../constants';
import Api from '../../api';
import { setAuthorizationHeader, decodedUser, history } from "../../utils";

export const register = (params) => async(dispatch) => {
  dispatch(({ type: constants.REQUEST_USER_REGISTER }));
  try {
    const response = await Api.user.register(params);
    const { refreshToken } = response.data;
    localStorage.setItem('jwt', refreshToken);
    const { data } = decodedUser(refreshToken);
    dispatch(({ type: constants.USER_LOGGED_IN, data }));
    history.push('/');
  } catch(err) {
    dispatch(({ type: constants.REQUEST_USER_REGISTER_FAIL, err }));
  }
}

export const login = (params) => async(dispatch) => {
  dispatch(({ type: constants.REQUEST_USER_LOGIN }));
  try {
    const response = await Api.user.login(params);
    const { refreshToken } = response.data;
    const { accessToken } = response.data;
    localStorage.setItem('jwt', refreshToken);
    localStorage.setItem('jwtAccessToken', accessToken);
    setAuthorizationHeader(refreshToken);
    const { data } = decodedUser(refreshToken);
    dispatch(({ type: constants.USER_LOGGED_IN, data }));
    history.push('/');
  } catch(err) {
    dispatch(({ type: constants.USER_LOGIN_FAIL, err }));
  }
}

export const getCurrentUser = () => async(dispatch) => {
  try {
    setAuthorizationHeader(localStorage.jwt);
    const data = await Api.user.current_user();
    dispatch(({ type: constants.USER_LOGGED_IN, data }));
  } catch(err) {
    dispatch(({ type: constants.USER_LOGGED_OUT }));
  }
}

export const logout = () => async(dispatch) => {
  try {
    localStorage.removeItem("jwt");
    localStorage.removeItem("jwtAccessToken");
    setAuthorizationHeader();
    await Api.user.logout();
    dispatch(({ type: constants.USER_LOGGED_OUT }));
  } catch(err) {
    dispatch(({ type: constants.USER_LOGGED_OUT }));
  }
};