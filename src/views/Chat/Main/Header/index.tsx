import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import styled from 'styled-components';

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <Container>
      <Toolbar>
        <LayoutGrow />
        <div>
          <IconButton aria-label="show 4 new mails" color="inherit">
            <Badge color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <IconButton aria-label="show 17 new notifications" color="inherit">
            <Badge color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </div>
      </Toolbar>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  background-color: #e0e0e0;
`;

const LayoutGrow = styled.div`
  flex-grow: 1;
`;
