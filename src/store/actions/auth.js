import * as constants from '../constants';
import Api from '../../api';
import { setAuthorizationHeader, decodedUser } from "../../utils";

export const register = (params) => async(dispatch) => {
  dispatch(({ type: constants.REQUEST_USER_REGISTER }));
  try {
    const response = await Api.user.register(params);
    const { refreshToken } = response.data;
    const { accessToken } = response.data;
    localStorage.setItem('jwt', refreshToken);
    localStorage.setItem('jwtAccessToken', accessToken);
    const { data } = decodedUser(refreshToken);
    dispatch(({ type: constants.USER_LOGGED_IN, data }));
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
  } catch(err) {
    dispatch(({ type: constants.USER_LOGIN_FAIL, err }));
  }
}

export const logout = () => async(dispatch) => {
  try {
    await Api.user.logout();
    localStorage.removeItem("jwt");
    localStorage.removeItem("jwtAccessToken");
    setAuthorizationHeader();
    dispatch(({ type: constants.USER_LOGGED_OUT }));
  } catch(err) {
    localStorage.removeItem("jwt");
    localStorage.removeItem("jwtAccessToken");
    setAuthorizationHeader();
    dispatch(({ type: constants.USER_LOGGED_OUT }));
  }
}

export const getCurrentUser = () => async(dispatch) => {
  const { exp } = decodedUser(localStorage.jwt);
  const checkExpDate = exp - parseInt(Date.now() / 1000, 10) <= 0;
  if(checkExpDate) return dispatch(logout());
  try {
    dispatch(({ type: constants.USER_HAS_TOKEN }));
    setAuthorizationHeader(localStorage.jwt);
    const data = await Api.user.current_user();
    dispatch(({ type: constants.USER_LOGGED_IN, data }));
  } catch(err) {
    dispatch(({ type: constants.USER_LOGGED_OUT }));
  }
}
