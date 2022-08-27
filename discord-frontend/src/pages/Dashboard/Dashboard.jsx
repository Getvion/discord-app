import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Dashboard = () => {
  const navigate = useNavigate();
  const { userData } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!userData) navigate('/login');
  }, []);

  return <div>Dashboard</div>;
};
