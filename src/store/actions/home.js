import { push } from 'connected-react-router';
import * as constants from '../constants';

// export const add = count => ({ type: constants.ADD, count });

export const add = count => dispatch => {
  dispatch(push('/user'));
};

export const getHomeInfo = () => async (dispatch, getState) => {
  const { name, age } = getState().homeInfo;
  if (name || age) return;
  await new Promise(resolve => {
    const homeInfo = {
      name: 'zura daraselia',
      age: '26',
    };
    resolve(homeInfo);
  }).then(homeInfo => {
    dispatch({ type: constants.GET_HOME_INFO, data: homeInfo });
  });
};
