import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from 'store/root-reducer';

const ModalAssign: any = React.forwardRef<{ isOpen: any }, any>(
  ({ isOpen, handleClose }, ref): any => {
    const staffs = useSelector((state: AppState) => state.staffs.staffs);

    console.log(staffs);

    return (
      <div>
        <h2>Assign Staff</h2>
        {staffs.map((item, i) => (
          <p key={i}>{item.name}</p>
        ))}
      </div>
    );
  }
);

export default ModalAssign;
