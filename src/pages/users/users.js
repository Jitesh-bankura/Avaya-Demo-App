import React, {Component} from 'react'
import axios from '../../axios'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Users: []
        };
    }
    getUsersData() {
        axios
            .get(`/users`, {})
            .then(res => {
                const data = res.data
                const users = data.map(u =>
                    // <div>
                    // <p>{u.id}</p>
                    // <p>{u.name}</p>
                    // <p>{u.email}</p>
                    // <p>{u.website}</p>
                    // <p>{u.company.name}</p>
                    // </div>
                    <div class="ui card z--1 card-design">
                    <div class="content">
                      <i class="right floated like icon"></i>
                      <i class="right floated star icon"></i>
                      <div class="header">{u.name} - {u.id}</div>

                      <div class="description">
                        <p>{u.email}</p>
                        <p>{u.website}</p>
                        <p>{u.company.name}</p>
                      </div>
                    </div>
                    <div class="extra content">
                      <span class="left floated like">
                        <i class="like icon"></i>
                        Like
                      </span>
                      <span class="right floated star">
                        <i class="star icon"></i>
                        Favorite
                      </span>
                    </div>
                  </div>
                    )

                    this.setState({
                        users
                    })

            })
            .catch((error) => {
                console.log(error)
            })

    }
    componentDidMount(){
        if(!this.props.isLoggedIn) this.props.history.push('/')
        this.getUsersData()
    }
    render() {

        return (
            <div>
                <h1>Users</h1>
                <Grid columns={3} divided>
                    {this.state.users}
                </Grid>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    isLoggedIn:state.loginData.loggedIn
  })
  
  
  export default connect(mapStateToProps) (withRouter(Users));