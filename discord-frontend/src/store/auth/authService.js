import axios from 'axios';

const BASE_URL = 'http://localhost:5002/api';

// Register user
const register = async (userData) => {
  const response = await axios.post(`${BASE_URL}/auth/register`, userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem('user');
  window.location.pathname = '/login';
};

// Login user
const login = async (userData) => {
  const response = await axios.post(`${BASE_URL}/auth/login`, userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

export const authService = { register, login, logout };
