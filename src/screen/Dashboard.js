import React from 'react';
import api from '../service/api';
import Navbar from '../components/Navbar';

class Dashboard extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        api.get("/users?page=1")
            .then(response => {
                this.setState({ users: response.data.data })
            })
            .catch(error => {
                alert(error.response.data.error)
            });
    }

    render() {
        return (
            <div className="App">
                <Navbar />
                <div className="container" style={{ marginTop: 100 }}>
                    {this.state.users.map(user =>
                        <div className="col-xs-12 col-sm-4" key={user.id} style={{ marginTop: 50 }}>
                            <label>{user.first_name} {user.last_name}</label>
                            <p>{user.email}</p>
                            <img
                                src={user.avatar}
                                width="100"
                                height="100" />
                        </div>
                    )}
                </div>
            </div>
        );
    }

}

export default Dashboard;
