import { getHomeInfo } from './home';
import { getUsers } from './users';

export const homeThunk = store => store.dispatch(getHomeInfo());
export const getUsersThunk = store => store.dispatch(getUsers());
