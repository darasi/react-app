import * as constants from '../constants';

const initialState = {
    isAuth: false,
    loading: false,
    data: {}
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case constants.REQUEST_USER_REGISTER:
      return { ...state, loading: true };
    case constants.REQUEST_USER_REGISTER_FAIL:
      return { ...state, loading: false };
    case constants.USER_LOGGED_IN:
      return { ...state, ...action.data };
    case constants.USER_LOGGED_OUT:
      return { ...state, ...action.data };
    default:
      return state;
  }
}

export default auth;