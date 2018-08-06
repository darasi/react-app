import * as constants from '../constants';

const initialState = {
    fetched: false,
    isFetching: false,
    failed: false,
    customer: {}
};

const site = (state = initialState, action) => {
  switch (action.type) {
    case constants.REQUEST_SITE_INFO:
      return { ...state, isFetching: true };
    case constants.REQUEST_SITE_INFO_FAIL:
      return { ...state, isFetching: false, fetched: false, failed: true };
    case constants.REQUEST_SITE_INFO_SUCCESS:
      return { ...state, customer: action.payload.data, isFetching: false, fetched: true, failed: false };
    default:
      return state;
  }
}

export default site;