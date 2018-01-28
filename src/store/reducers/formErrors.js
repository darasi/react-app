import * as constants from '../constants';

const initialSate = {
    register: {}
}

export const formErrors = (state = initialSate, action) => {
  switch (action.type) {
    case constants.REQUEST_USER_REGISTER:
      return { ...state, register: {} };
    case constants.REQUEST_USER_REGISTER_FAIL:
      return { ...state, register: action.err.response.data.error };
    default:
      return state;
  }
}