import Loadable from 'react-loadable';
import { homeThunk, getUsersThunk } from '../../store/actions/thunk';
import Loading from '../../components/Loading';

const LoadableHomePage = Loadable({
  loader: () => import(/* webpackChunkName: 'HomePage' */'../../containers/HomePage'),
  loading: Loading
});
const LoadableHome = Loadable({
  loader: () => import(/* webpackChunkName: 'Home' */'../../containers/Home'),
  loading: Loading
});
const LoadableUser = Loadable({
  loader: () => import(/* webpackChunkName: 'User' */'../../containers/User'),
  loading: Loading
});
const LoadableRegister = Loadable({
  loader: () => import(/* webpackChunkName: 'Register' */'../../containers/Register'),
  loading: Loading
});

const routesConfig = [{
  path: '/',
  exact: true,
  component: LoadableHomePage,
  thunk: getUsersThunk,
  authRoute: false,
  guestRoute: false
}, {
  path: '/thunk',
  component: LoadableHome,
  thunk: homeThunk,
  authRoute: false,
  guestRoute: false
}, {
  path: '/user',
  component: LoadableUser,
  thunk: getUsersThunk,
  authRoute: true,
  guestRoute: false
}, {
  path: '/register',
  component: LoadableRegister,
  thunk: () => {},
  authRoute: false,
  guestRoute: true
}];

export default routesConfig;




