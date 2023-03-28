import React from 'react';

function Header() {
  return (
    <header className='header'>
      <h1>||| Header bar |||</h1>
      <div>
        <button className='dark-button'>Login</button>
        <button className='light-button'>Register</button>
      </div>
    </header>
  );
}

export default Header;