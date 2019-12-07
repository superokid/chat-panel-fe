import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import ModalSelector from './ModalSelector';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(2, 4, 3),
      borderRadius: 4
    }
  })
);

interface Props {
  isOpen: boolean;
  modalName: string;
  setModal: (isOpen: boolean) => void;
}

const ModalC: React.ComponentType<Props> = ({ isOpen, setModal, modalName }) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  const handleClose = () => {
    setModal(false);
  };

  return (
    <Modal open={isOpen} onClose={handleClose}>
      <div style={modalStyle} className={classes.paper}>
        <ModalSelector modalName={modalName} />
      </div>
    </Modal>
  );
};

export default ModalC;
