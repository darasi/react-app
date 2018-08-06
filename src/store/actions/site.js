import * as constants from '../constants';
import Api from '../../api';

export const getInfo = (pid) => async(dispatch) => {
  try {
    dispatch({ type: constants.REQUEST_SITE_INFO });
    const payload = await Api.site.getSiteInfo(pid);
    dispatch({ type: constants.REQUEST_SITE_INFO_SUCCESS, payload });
  } catch(err) {
    dispatch({ type: constants.REQUEST_SITE_INFO_FAIL });
  }
}
