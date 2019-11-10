import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import { sidebarRoutes } from 'modules/router';

const Sidebar = () => {
  return (
    <div>
      <Link to={'/chat'}>
        <ListItem button>
          <ListItemText primary="Chat" />
        </ListItem>
      </Link>
      {sidebarRoutes.map(item => (
        <Link to={`${item.path}`} key={item.title}>
          <ListItem button>
            <ListItemIcon>{<item.icon />}</ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItem>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
