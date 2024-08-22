import React, { useContext } from 'react';
import './Navbar.css';
import { AppContext } from '../../AppContext';
import { Link, useNavigate } from 'react-router-dom';
import carticon from '../Assets/cart_icon.png'
import logo from '../Assets/logo.png'



const Navbar = () => {
const { getTotalCartItems, user, logout } = useContext(AppContext);
const navigate=useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/signup');
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="logo" />
         <p>Shopper</p>
      </div>
      <div className="navbar-menu">
      <ul>
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/productlist" className="navbar-link">Products</Link>
        </li>
        <li className="navbar-item">
          <Link to="/about" className="navbar-link">About Us</Link>
        </li>
        <li className="navbar-item">
          <Link to="/contact" className="navbar-link">Contact Us</Link>
        </li>
      </ul>
      </div>
       
      <div className="login-cart">
      {user ? (
          <button className='logout' onClick={handleLogout}>Logout</button>
        ) : (
          <div className="login">
            <Link to='/login'><button>Login</button></Link>
          </div>
        )}
      <div className='navbar-cart'>
            <Link to="/cart"><img src={carticon} alt="" /></Link>
            <p>{getTotalCartItems()}</p>
      </div>
      </div>

    </nav>
  );
};

export default Navbar;
