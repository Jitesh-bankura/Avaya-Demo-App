import React, { Component } from 'react'
import axios from '../../axios'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Grid, Search } from 'semantic-ui-react';
class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false, results: null, value: '',
            users: []
        };
    }
    createUserCard(u) {
        return (
            <div class="ui card z--1 card-design red">
                <div class="content">
                    <div class="header">{u.title}</div>
                    <div class="meta">{u.id}</div>
                    <div class="description">
                        <p>{u.body}</p>
                    </div>
                </div>
            </div>
        )
    }
    getUsersData() {
        axios
            .get(`/posts`, {})
            .then(res => {
                const data = res.data
                const users = data.map(u =>
                    this.createUserCard(u)
                )

                this.setState({
                    users
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
                <h1>Posts</h1>
                <Search
                    loading={this.state.isLoading}
                    onSearchChange={this.handleSearchChange}
                    value={this.state.value}
                    showNoResults={false}
                />
                <Grid columns={3} divided>
                    {userToDisplay}
                </Grid>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    isLoggedIn: state.loginData.loggedIn
})

export default connect(mapStateToProps)(withRouter(Post));