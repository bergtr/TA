import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.styles.scss';

const Navbar = ({currentUser}) => {

  return (
    <div class="sidenav">
    <Link className='logo-container' to='/'>
      APP NAME
    </Link>
    <div className='options'>
      <Link className='option' to='/explore'>
        EXPLORE
      </Link>
      <Link className='option' to='/profile'>
        PROFILE
      </Link>
      {currentUser ? (
        <div className='option'>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/landing'>
          SIGN IN
        </Link>
      )}
    </div>
    </div>
  )
}

export default Navbar;