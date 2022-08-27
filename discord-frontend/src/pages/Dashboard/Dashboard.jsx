import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getUserData } from '../../store/auth/authSlice';

export const Dashboard = () => {
  const navigate = useNavigate();
  const userData = useSelector(getUserData);

  useEffect(() => {
    if (!userData) navigate('/login');
  }, []);

  return <div>Dashboard</div>;
};
