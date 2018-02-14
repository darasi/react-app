import * as constants from '../constants';
import Api from '../../api';

export const paypal = (body) => async(dispatch) => {
  try {
    dispatch(({ type: constants.REQUEST_CHECKOUT_PAYPAL }));
    const data = await Api.checkout.paypal(body);
    if(data.approval_url) window.location.assign(data.approval_url);
  } catch(err) {
    dispatch(({ type: constants.CHECKOUT_PAYPAL_FAIL }));
  }
}

