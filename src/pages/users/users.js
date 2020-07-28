import React, { Component } from 'react'
import axios from '../../axios'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Grid, Search } from 'semantic-ui-react';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false, results: null, value: '',
      users: []
    };
  }
  handleStarClick = (index) => {
    const users = this.state.users;
    users[index].isStared = users[index].isStared ? false : true;
    this.setState({ users: [...users] });
  }

  getUsersData() {
    axios
      .get(`/users`, {})
      .then(res => {
        const data = res.data
        this.setState({
          users: data
        })

      })
      .catch((error) => {
        console.log(error)
      })

  }
  componentDidMount() {
    if (!this.props.isLoggedIn) this.props.history.push('/')
    this.getUsersData()
  }

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })
    if (!value) this.setState({ results: null })
    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState({ isLoading: false, results: null, value: '' })
      const results = this.state.users.filter((user, index) => {
        const stringifiedObj = JSON.stringify(user).toLowerCase();
        return stringifiedObj.indexOf(value.toLowerCase()) > -1
      })
      this.setState({
        isLoading: false,
        results: results
      })
    }, 300)
  }
  render() {
    const userToDisplay = this.state.results || this.state.users;
    return (
      <div>
        <h1>Users</h1>
        <Search
          loading={this.state.isLoading}
          onSearchChange={this.handleSearchChange}
          value={this.state.value}
          showNoResults={false}
        />
        <Grid columns={3} divided>
          {userToDisplay.map((u, index) => {
            return (<>
              <div className="ui card card-design red" key={new Date().getTime() + index}>
                <div className="content">
                  <div className="header">{u.name} - {u.id}</div>

                  <div className="description">
                    <p>{u.email}</p>
                    <p>{u.website}</p>
                    <p>{u.company.name}</p>
                  </div>
                </div>
                <div class="extra content" onClick={() => { this.handleStarClick(index) }}>
                  <span class="left floated like" >
                    <i class={`like icon ${u.isStared ? 'red': '' }`}></i>
                  Like
                </span>
                </div>
              </div>
            </>
            )
          })}
        </Grid>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  isLoggedIn: state.loginData.loggedIn
})
export default connect(mapStateToProps)(withRouter(Users));