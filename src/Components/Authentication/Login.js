// src/Login.js
import React, { useState, useContext } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';
import { AppContext } from '../../AppContext';
import './Login.css'

const Login = () => {
  const navigate=useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AppContext);

  const handleLogin = (e) => {
    e.preventDefault();
    if (login(email, password)) {
      toast.success('Login successful!');
      navigate('/');
    } else {
      toast.error('Login failed!');
    }
  };

  return (
    <div className='login1'>
     <h2 className='heading'>Login</h2>
     <div className='login-form'>
     <form onSubmit={handleLogin}>
      <input
        type="text"
        placeholder="User_email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
     </div>
    
    <div className='signup-link'>
        <p>Create a new account! <Link className='link1' to='/signup'>signup here</Link></p>
    </div>
    </div>
    
  );
};

export default Login;
