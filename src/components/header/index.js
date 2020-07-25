import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
    <div className="Header sticky-header">
      <Link to="/">Home</Link>
    </div>
    <div className="Header">
    </div>
    </>
  )
}

export default Header;