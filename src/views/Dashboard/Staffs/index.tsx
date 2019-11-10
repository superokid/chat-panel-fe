import React from 'react';
import { Link } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom';

const Staffs: React.FC<RouteComponentProps> = ({ match }) => {
  const { path } = match;
  return (
    <div>
      <Link to={`${path}/new`}>Add New Staff</Link>
      <Link to={`${path}/edit`}>Edit Staff</Link>
    </div>
  );
};

export default Staffs;
