import Dashboard from 'views/Dashboard';
import Logout from 'views/Logout';
import Chat from 'views/Chat';
import Login from 'views/Login';
import { sidebarRoutes } from './dashboard';

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
    title: 'Dashboard'
  },
  {
    path: '/logout',
    component: Logout
  }
];

export { routes, sidebarRoutes };
