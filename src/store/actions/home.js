import * as constants from '../constants';
import Api from '../../api';

export const add = (count) => ({ type: constants.ADD, count })

export const getHomeInfo = () => async(dispatch,getState) => {
  const { name, age } = getState().homeInfo;
  if (name || age) return
  await new Promise(resolve => {
    const homeInfo = {
      name: 'zura daraselia',
      age: '26'
    }
    resolve(homeInfo)
  }).then(homeInfo => {
    dispatch({ type: constants.GET_HOME_INFO, data: homeInfo })
  })
}

export const getPosts = (filter = null) => async(dispatch/* getState */) => {
  // dispatch({ type: constants.REQUEST_POSTS, data: { loading: true } });
  await new Promise(resolve => {
    const posts = Api.getPosts(filter);
    resolve(posts);
  }).then(posts => {
    dispatch({ type: constants.REQUEST_POSTS_SUCCESS, data: { loading: false, data: posts.children} });
  })

}
