import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from 'store/auth/action';

interface Props {}

const Logout: React.FC<Props> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logout());
  }, [dispatch]);
  return <div>Loading...</div>;
};

export default Logout;
