import * as constants from '../constants';
import Api from '../../api';
import { setAuthorizationHeader, decodedUser } from "../../utils";

export const logout = () => async(dispatch) => {
  try {
    await Api.user.logout();
    localStorage.removeItem("jwt");
    setAuthorizationHeader();
    dispatch(({ type: constants.USER_LOGGED_OUT }));
  } catch(err) {
    localStorage.removeItem("jwt");
    setAuthorizationHeader();
    dispatch(({ type: constants.USER_LOGGED_OUT }));
  }
}

export const getCurrentUser = () => async(dispatch) => {
  const { exp } = decodedUser(localStorage.jwt);
  const checkExpDate = exp - parseInt(Date.now() / 1000, 10) <= 0;
  try {
    if(checkExpDate) {
      dispatch(logout());
    } else {
      dispatch(({ type: constants.USER_HAS_TOKEN }));
      setAuthorizationHeader(localStorage.jwt);
      const data = await Api.user.current_user();
      dispatch(({ type: constants.USER_LOGGED_IN, data }));
    }
  } catch(err) {
    dispatch(({ type: constants.USER_LOGGED_OUT }));
  }
}

export const register = (params) => async(dispatch) => {
  try {
    dispatch(({ type: constants.REQUEST_USER_REGISTER }));
    const response = await Api.user.register(params);
    const { refreshToken } = response.data;
    localStorage.setItem('jwt', refreshToken);
    dispatch(getCurrentUser());
  } catch(err) {
    dispatch(({ type: constants.REQUEST_USER_REGISTER_FAIL, err }));
  }
}

export const login = (params) => async(dispatch) => {
  try {
    dispatch(({ type: constants.REQUEST_USER_LOGIN }));
    const response = await Api.user.login(params);
    const { refreshToken } = response.data;
    localStorage.setItem('jwt', refreshToken);
    dispatch(getCurrentUser());
  } catch(err) {
    dispatch(({ type: constants.USER_LOGIN_FAIL, err }));
  }
}

export const fbAuth = (result) => async(dispatch) => {
  if(result.accessToken) {
    dispatch(({ type: constants.REQUEST_USER_LOGIN }));
    const response = await Api.user.fbAuth({ access_token: result.accessToken });
    const { refreshToken } = response;
    localStorage.setItem('jwt', refreshToken);
    dispatch(getCurrentUser());
  }
}
