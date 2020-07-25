import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

function Home(props) {
  useEffect(function(){
    if(!props.isLoggedIn) props.history.push('/')
  },[])
  return (
    <div className="Home">
      <h1>Welcome to Avaya</h1>
    </div>
  )
}

const mapStateToProps = state => ({
  isLoggedIn:state.loginData.loggedIn
})


export default connect(mapStateToProps) (withRouter(Home));