import { getHomeInfo, getPosts } from './home';

export const homeThunk = store => store.dispatch(getHomeInfo())
export const postsThunk = store => store.dispatch(getPosts())
