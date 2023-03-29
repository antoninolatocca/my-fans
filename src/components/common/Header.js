import React from 'react';
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className='header'>
      <Link to="/"><h1>My Fans</h1></Link>
      <div>
        <Link to="/login"><button className='dark-button'>Login</button></Link>
        <Link to="/register"><button className='light-button'>Register</button></Link>
      </div>
    </header>
  );
}

export default Header;