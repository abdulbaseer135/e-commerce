// src/Logout.js
import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';

const Logout = () => {
  const { logout } = useContext(AppContext);

  return <button className='logout' onClick={logout}>Logout</button>;
};

export default Logout;
