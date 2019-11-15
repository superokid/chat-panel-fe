import Dashboard from 'views/Dashboard';
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
  }
];

export { routes, sidebarRoutes };
