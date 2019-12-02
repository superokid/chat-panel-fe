import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ModalAssign from '../../Modal/ModalAssign';
import styled from 'styled-components';

interface Props {}

const Dropdown: React.FC<Props> = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Container>
      <ModalAssign isOpen={isOpen} handleClose={() => setOpen(false)} />
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} size="small">
        <ExpandMoreIcon />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleOpen}>Assign</MenuItem>
      </Menu>
    </Container>
  );
};

export default Dropdown;

const Container = styled.div`
  position: absolute;
  bottom: 5px;
  right: 0;
`;
