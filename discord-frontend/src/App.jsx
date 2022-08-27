import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Login, Register, Dashboard } from './pages';

const App = () => (
  <div className='app'>
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/*' element={<Navigate to='/dashboard' />} />
    </Routes>
  </div>
);

export default App;
