import * as constants from '../constants';
import Api from '../../api';
import { setAuthorizationHeader, decodedUser } from "../../utils";


export const register = (params) => async(dispatch) => {
  dispatch(({ type: constants.REQUEST_USER_REGISTER }));
  try {
    const response = await Api.user.register(params);
    const { refreshToken } = response.data;
    localStorage.jwt = refreshToken;
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
    localStorage.jwt = refreshToken;
    setAuthorizationHeader(refreshToken);
    const { data } = decodedUser(refreshToken);
    dispatch(({ type: constants.USER_LOGGED_IN, data }));
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
    console.log(err);
  }
}

export const logout = () => async(dispatch) => {
  try {
    await Api.user.logout();
    localStorage.removeItem("jwt");
    setAuthorizationHeader();
    dispatch(({ type: constants.USER_LOGGED_OUT }));
  } catch(err) {
    console.log(err);
  }
};