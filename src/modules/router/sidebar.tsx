import Staffs from 'views/Dashboard/Staffs';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';

const sidebarRoutes = [
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

export default sidebarRoutes;
