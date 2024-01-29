import React from 'react';
import './Header.css';
import logo from '../../assets/round-logo.svg';

const Header = () => {
  return (
    <header className='header'>
      <img className='logo' src={logo} alt="Todo logo" />
      <h1>TODO</h1>
    </header>
  );
};

export default Header;
