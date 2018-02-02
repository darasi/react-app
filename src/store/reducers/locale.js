import * as constants from '../constants';

const initialState = {
    lang: "ka"
};

const locale = (state = initialState, action) => {
  switch (action.type) {
    case constants.LOCALE_SET:
      return { ...state, lang: action.lang };
    default:
      return state;
  }
}

export default locale;