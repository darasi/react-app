import * as constants from '../constants';

export const setLocale = lang => async dispatch => {
  localStorage.lang = lang;
  dispatch({ type: constants.LOCALE_SET, lang });
};
