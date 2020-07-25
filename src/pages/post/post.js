import React, {Component} from 'react'
import axios from '../../axios'
import { Grid } from 'semantic-ui-react'

export default class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Users: []
        };
    }
    getUsersData() {
        axios
            .get(`/posts`, {})
            .then(res => {
                const data = res.data
                console.log('post component data',data)
                const users = data.map(u =>
                    <div class="ui card z--1 card-design">
                    <div class="content">
                      <div class="header">{u.title}</div>
                      <div class="meta">{u.id}</div>

                      <div class="description">
                        <p>{u.body}</p>
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
        this.getUsersData()
    }
    render() {

        return (
            <div>
                <h1>Post</h1>
                <Grid columns={3} divided>
                    {this.state.users}
                </Grid>
            </div>
        )
    }
}