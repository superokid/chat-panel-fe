import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Form from '../form';
import { IPostStaff } from 'store/staffs/type';

interface Props {
  postStaff: (values: IPostStaff) => void;
}

const StaffNew: React.FC<Props> = ({ postStaff }) => {
  return (
    <Card>
      <CardContent>
        New Staff
        <Form onSubmit={values => postStaff(values)} />
      </CardContent>
    </Card>
  );
};

export default StaffNew;
