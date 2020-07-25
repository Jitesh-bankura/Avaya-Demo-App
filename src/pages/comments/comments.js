import React, {Component} from 'react'
import axios from '../../axios'
import avatar from './avatar.jpg';
import { Grid } from 'semantic-ui-react';

export default class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Users: []
        };
    }
    getUsersData() {
        axios
            .get(`/comments`, {})
            .then(res => {
                const data = res.data
                const users = data.map(u =>
                    <div class="ui card z--1 card-design">
                    <div class="content">
                        <div class="header">{u.name}</div>
                        <div class="meta">
                        <span class="category">id: {u.id}</span>
                        </div>
                        <div class="description">
                        <p>{u.body}</p>
                        </div>
                    </div>
                    <div class="extra content">
                        <div class="right floated author">
                        <img class="ui avatar image" src={avatar} /> {u.email}
                        </div>
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
        this.getUsersData()
    }
    render() {

        return (
            <div>
                <h1>Comments</h1>
                <Grid columns={3} divided>
                    {this.state.users}
                </Grid>
            </div>
        )
    }
}