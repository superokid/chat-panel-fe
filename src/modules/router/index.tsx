import Dashboard from 'views/Dashboard';
import Chat from 'views/Chat';
import Login from 'views/Login';
import DashboardIcon from '@material-ui/icons/Dashboard';
import sidebarRoutes from './sidebar';

const routes = [
  {
    path: '/',
    component: Login,
    exact: true
  },
  {
    path: '/chat',
    component: Chat
  },
  {
    path: '/dashboard',
    component: Dashboard,
    title: 'Dashboard',
    icon: DashboardIcon
  }
];

export { routes, sidebarRoutes };
