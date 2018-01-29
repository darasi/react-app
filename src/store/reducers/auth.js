import * as constants from '../constants';

const initialState = {
    isAuth: false,
    registerLoading: false,
    loginLoading: false,
    data: {}
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case constants.REQUEST_USER_REGISTER:
      return { ...state, registerLoading: true };
    case constants.REQUEST_USER_REGISTER_FAIL:
      return { ...state, registerLoading: false };
    case constants.REQUEST_USER_LOGIN:
      return { ...state, loginLoading: true };
    case constants.USER_LOGIN_FAIL:
      return { ...state, loginLoading: false };
    case constants.USER_LOGGED_IN:
      return { ...state, data: action.data, loginLoading: false, registerLoading: false, isAuth: true };
    case constants.USER_LOGGED_OUT:
      return { ...state, loginLoading:false, isAuth: false, data: {} };
    default:
      return state;
  }
}

export default auth;