import React, {Component} from 'react'
import axios from '../../axios'

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
                    <div>
                    <p>{u.id}</p>
                    <p>{u.title}</p>
                    <p>{u.body}</p>
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
                {this.state.users}
            </div>
        )
    }
}