import * as constants from '../constants';

const initialSate = {
  register: {},
  login: {}
}

export const formErrors = (state = initialSate, action) => {
  switch (action.type) {
    case constants.REQUEST_USER_REGISTER:
      return { ...state, register: {} };
    case constants.REQUEST_USER_REGISTER_FAIL:
      return { ...state, register: action.err.response.data.error };
    case constants.REQUEST_USER_LOGIN:
      return { ...state, login: {} };
    case constants.USER_LOGIN_FAIL:
      return { ...state, login: action.err.response.data.error };
    default:
      return state;
  }
}