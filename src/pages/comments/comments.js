import React, {Component} from 'react'
import axios from '../../axios'

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
                console.log('Comments component data',data)
                const users = data.map(u =>
                    <div>
                    <p>{u.id}</p>
                    <p>{u.name}</p>
                    <p>{u.email}</p>
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
                <h1>Comments</h1>
                {this.state.users}
            </div>
        )
    }
}