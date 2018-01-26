import * as constants from '../constants';

export const auth = (state = { isAuth: false, user: {}}, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export const counter = (state = { count: 33 }, action) => {
  switch (action.type) {
    case constants.ADD:
      return Object.assign({},state,{ count: action.count });
    default:
      return state;
  }
}

export const homeInfo = (state = { name: '', age: '' }, action) => {
  switch (action.type) {
    case constants.GET_HOME_INFO:
      return Object.assign({}, state, action.data);
    default:
      return state;
  }
}

export const posts = (state = { loading: false, data: [] }, action) => {
  switch (action.type) {
    case constants.REQUEST_POSTS:
      return Object.assign({}, state, action.data);
    case constants.REQUEST_POSTS_SUCCESS:
      return Object.assign({}, state, action.data);
    default:
      return state;
  }
}