import Loadable from 'react-loadable';
import { homeThunk, getUsersThunk, getSiteInfo } from '../../store/actions/thunk';
import Loading from '../../components/Loading';
import { userIsAuthenticatedRedir, userIsNotAuthenticatedRedir } from '../../components/hoc/ReduxAuthWrapper';
import DefaultLayout from '../../components/layouts/DefaultLayout';
import SiteLayout from '../../components/layouts/SiteLayout';

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
const LoadableSite = Loadable({
  loader: () => import(/* webpackChunkName: 'Site' */'../../containers/Site'),
  loading: Loading,
  delay: 50
});

const routesConfig = [{
  path: '/',
  exact: true,
  component: LoadableHomePage,
  thunk: getUsersThunk,
  layout: DefaultLayout,
}, {
  path: '/thunk',
  component: LoadableHome,
  thunk: homeThunk,
  layout: DefaultLayout,
}, {
  path: '/user',
  component: userIsAuthenticatedRedir(LoadableUser),
  thunk: getUsersThunk,
  layout: DefaultLayout,
}, {
  path: '/register',
  component: userIsNotAuthenticatedRedir(LoadableRegister),
  thunk: () => {},
  layout: DefaultLayout,
}, {
  path: '/login',
  component: userIsNotAuthenticatedRedir(LoadableLogin),
  thunk: () => {},
  layout: DefaultLayout,
}, {
  path: '/site/:site',
  component: LoadableSite,
  thunk: getSiteInfo,
  layout: SiteLayout,
}];

export default routesConfig;
