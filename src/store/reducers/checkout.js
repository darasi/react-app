import * as constants from '../constants';

const initialState = {
  loading: false,
  fail: false
};

const checkout = (state = initialState, action) => {
  switch (action.type) {
    case constants.REQUEST_CHECKOUT_PAYPAL:
      return { ...state, loading: true, fail: false };
    case constants.CHECKOUT_PAYPAL_FAIL:
      return { ...state, loading: false, fail: true };
    default:
      return state;
  }
}

export default checkout;