import * as constants from '../constants';

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