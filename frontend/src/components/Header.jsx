import React from 'react';
import {Link} from "react-router-dom"
import useAuthContext from '../hooks/useAuthContext';

const Header = () => {
  const {user, dispatch}=useAuthContext();

  const handleLogout = () => {
    dispatch({type: 'LOGOUT'});
    localStorage.removeItem('user');
  }
  return (
    <header className="header">
      <div className="logo">
        <h1>Blood Donation</h1>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
          <li className="nav-item"><Link to="/about" className="nav-link">About Us</Link></li>
          <li className="nav-item"><Link to="/donorList" className="nav-link">Donors List</Link></li>
          <li className="nav-item"><Link to="/Contact" className="nav-link">Contact Us</Link></li>
        </ul>
      </nav>
      {
        user ? 
        <div className="header-user">
          <span>{user.email}</span>
          <button onClick={handleLogout} className='header-auth-button'>Logout</button>
        </div>
        :
        <div className='auth-btn-group'>
        <Link to='/login'><button className='header-auth-button'>Login</button></Link>
        <Link to='/signup'><button className='header-auth-button'>Sign up</button></Link>
      </div>
      }
    </header>
  );
};

export default Header;