import Loadable from 'react-loadable';
import { homeThunk, getUsersThunk } from '../../store/actions/thunk';
import Loading from '../../components/Loading';
import { userIsAuthenticatedRedir, userIsNotAuthenticatedRedir } from '../../components/hoc/ReduxAuthWrapper';

const LoadableHomePage = Loadable({
  loader: () => import(/* webpackChunkName: 'HomePage' */'../../containers/HomePage'),
  loading: Loading,
  delay: 50
});
const LoadableHome = Loadable({
  loader: () => import(/* webpackChunkName: 'Home' */'../../containers/Home'),
  loading: Loading,
  delay: 50
});
const LoadableUser = Loadable({
  loader: () => import(/* webpackChunkName: 'User' */'../../containers/User'),
  loading: Loading,
  delay: 50
});
const LoadableRegister = Loadable({
  loader: () => import(/* webpackChunkName: 'Register' */'../../containers/Register'),
  loading: Loading,
  delay: 50
});
const LoadableLogin = Loadable({
  loader: () => import(/* webpackChunkName: 'Login' */'../../containers/Login'),
  loading: Loading,
  delay: 50
});

const routesConfig = [{
  path: '/',
  exact: true,
  component: LoadableHomePage,
  thunk: getUsersThunk
}, {
  path: '/thunk',
  component: LoadableHome,
  thunk: homeThunk,
}, {
  path: '/user',
  component: userIsAuthenticatedRedir(LoadableUser),
  thunk: getUsersThunk
}, {
  path: '/register',
  component: userIsNotAuthenticatedRedir(LoadableRegister),
  thunk: () => {}
}, {
  path: '/login',
  component: userIsNotAuthenticatedRedir(LoadableLogin),
  thunk: () => {}
}];

export default routesConfig;
