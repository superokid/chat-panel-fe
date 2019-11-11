import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom';
import { Staff } from 'store/staffs/type';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';

interface Props {
  getStaffs: () => void;
  staffs: Staff[];
}

const Staffs: React.FC<RouteComponentProps & Props> = ({ match, history, getStaffs, staffs }) => {
  const { path } = match;

  useEffect(() => {
    getStaffs();
  }, [getStaffs]);

  return (
    <div>
      <Button variant="contained" color="primary" onClick={() => history.push(`${path}/new`)}>
        Add New Staff
      </Button>
      <Card>
        <CardContent>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {staffs.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>
                    <Link to={`${path}/edit`}>
                      <EditIcon color="action" />
                    </Link>
                    <CloseIcon color="error" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Staffs;
