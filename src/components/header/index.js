import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { logoutSuccess } from '../../actions/login'

function Header(props) {
    function handleLogoutClick(){
        props.logoutSuccess();
    }
  return (
    <>
    <div className="Header sticky-header">
      <Link onClick={handleLogoutClick} to="/"><Button primary className='button-color'>Logout</Button></Link>
    </div>
    <div className="Header">
    </div>
    </>
  )
}

export default connect(null,{logoutSuccess})(Header);