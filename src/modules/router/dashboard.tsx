import Staffs from 'views/Dashboard/Staffs';
import StaffsNew from 'views/Dashboard/Staffs/New';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';

interface IRoutes {
  path: string;
  component: React.FC<any>;
  title?: string;
  icon?: any;
}

const sidebarRoutes: IRoutes[] = [
  {
    path: '/dashboard/staffs',
    component: Staffs,
    title: 'Staffs',
    icon: PeopleIcon
  },
  {
    path: '/dashboard/orders',
    component: Staffs,
    title: 'Orders',
    icon: ShoppingCartIcon
  },
  {
    path: '/dashboard/customers',
    component: Staffs,
    title: 'Customers',
    icon: PeopleIcon
  }
];

const dashboardRoutes: IRoutes[] = [
  ...sidebarRoutes,
  {
    path: '/dashboard/staffs/new',
    component: StaffsNew
  }
];

export { sidebarRoutes };
export default dashboardRoutes;
