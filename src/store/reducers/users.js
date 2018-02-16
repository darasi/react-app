import * as constants from '../constants';

const initialState = {
    loading: false,
    errors: {},
    data: {
      data: [],
      pagination: {}
    }
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case constants.REQUEST_USERS:
      return { ...state, loading: true, errors: {} };
    case constants.REQUEST_USERS_SUCCESS:
      return { ...state, loading: false, data: action.data };
    case constants.REQUEST_USERS_FAIL:
      return { ...state, loading: false };
    default:
      return state;
  }
}

export default users;