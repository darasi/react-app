import * as constants from '../constants';
import Api from '../../api';

export const register = (data) => async(dispatch) => {
  dispatch(({ type: constants.REQUEST_USER_REGISTER }));
  try {
    const res = await Api.user.register(data);
    localStorage.jwt = res.data.refreshToken;
    dispatch(({ type: constants.USER_LOGGED_IN, res }));
  } catch(err) {
    dispatch(({ type: constants.REQUEST_USER_REGISTER_FAIL, err }));
  }
}