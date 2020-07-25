import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Users from './pages/users/users'
import Home from './pages/Home';
import Post from './pages/post/post';
import Comments from './pages/comments/comments';
import LoginForm from './pages/Login';
import Header from './components/header';
import Sidebar from './components/sidebar';
import { connect } from 'react-redux';

function App(props) {
  return (
    <div className="App">
      <Router>
        <Route render={({ location, history }) => (
          <React.Fragment>

            <div>
              <Header />
              <div className="main-container">
                {props.isLoggedIn && <div className="sidebar"><Sidebar /> </div>}
                <div className={props.isLoggedIn ? 'center-container' : 'default-container'}>
                  <Route path="/" exact component={props => <LoginForm />} />
                  <Route path="/home" component={props => <Home />} />
                  <Route path="/users" component={props => <Users />} />
                  <Route path="/comments" component={props => <Comments />} />
                  <Route path="/posts" component={props => <Post />} />
                </div>
              </div>
            </div>
          </React.Fragment>
        )}
        />
      </Router>
    </div>
  );
}
const mapStateToProps = state => ({
  isLoggedIn: state.loginData.loggedIn
})


export default connect(mapStateToProps)(App);
