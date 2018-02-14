import { getHomeInfo } from './home';
import { getUsers } from './users';
import { getCurrentUser, logout } from './auth';

export const homeThunk = store => store.dispatch(getHomeInfo());
export const getUsersThunk = store => store.dispatch(getUsers());
export const getCurrentUserThunk = store => store.dispatch(getCurrentUser());
export const logoutThunk = store => store.dispatch(logout());
