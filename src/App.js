import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './App.css';
import Users from './pages/users/users'
import Home from './pages/Home';
import Post from './pages/post/post';
import Comments from './pages/comments/comments';
import LoginForm from './pages/Login';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Router>
        <Route render={({ location, history }) => (
          <React.Fragment>
            <SideNav
              onSelect={(selected) => {
                const to = '/' + selected;
                if (location.pathname !== to) {
                  history.push(to);
                }
              }}
            >
              <SideNav.Toggle />
              <SideNav.Nav defaultSelected="home">
                <NavItem eventKey="posts">
                  <NavIcon>
                    <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                  </NavIcon>
                  <NavText>
                    Posts
                        </NavText>
                </NavItem>
                <NavItem eventKey="users">
                  <NavIcon>
                    <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                  </NavIcon>
                  <NavText>
                    Users
                  </NavText>
                </NavItem>
                <NavItem eventKey="comments">
                  <NavIcon>
                    <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                  </NavIcon>
                  <NavText>
                    Comments
                  </NavText>
                </NavItem>
              </SideNav.Nav>
            </SideNav>
            <main>
              <Route path="/" exact component={props => <LoginForm />} />
              <Route path="/home" component={props => <Home />} />
              <Route path="/users" component={props => <Users />} />
              <Route path="/comments" component={props => <Comments />} />
              <Route path="/posts" component={props => <Post />} />
            </main>
          </React.Fragment>
        )}
        />
      </Router>
    </div>
  );
}

export default App;
