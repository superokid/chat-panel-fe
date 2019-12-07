import React from 'react';
import ModalAssign from 'views/Chat/Modal/ModalAssign';

interface Props {
  modalName: string;
}

const ModalSelector: React.FC<Props> = ({ modalName }) => {
  if (modalName === 'assign') {
    return <ModalAssign />;
  }
  return null;
};

export default ModalSelector;
