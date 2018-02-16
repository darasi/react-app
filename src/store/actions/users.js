import * as constants from '../constants';
import Api from '../../api';

export const getUsers = () => async(dispatch) => {
  try {
    dispatch({ type: constants.REQUEST_USERS });
    const data = await Api.user.getUsers();
    dispatch({ type: constants.REQUEST_USERS_SUCCESS, data });
  } catch(err) {
    dispatch({ type: constants.REQUEST_USERS_FAIL });
  }
}
