import React from 'react';
import api from '../service/api';

class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: "eve.holt@reqres.in",
            password: "cityslicka"
        }
    }

    sendForm() {
        let data = {
            email: this.state.email,
            password: this.state.password
        }

        api.post("/login", data)
            .then(response => {
                if (response.data.token != null) {
                    this.props.history.push("/dashboard");
                }
            })
            .catch(error => {
                if (error.response.status === 400) {
                    alert(error.response.data.error)
                    this.setState({ email: "", password: "" })
                }
            });
    }

    render() {
        return (
            <div className="App">
                <div className="container" style={{ marginTop: "50px" }}>
                    <div className="form-group">
                        <label>E-mail:</label>
                        <input
                            type="email"
                            placeholder="Digite seu e-mail!"
                            className="form-control"
                            value={this.state.email}
                            onChange={event => this.setState({ email: event.target.value })} />
                    </div>
                    <div className="form-group">
                        <label>Senha:</label>
                        <input
                            type="text"
                            placeholder="Digite sua senha!"
                            className="form-control"
                            value={this.state.password}
                            onChange={event => this.setState({ password: event.target.value })} />
                    </div>
                    <div className="form-group">
                        <button type="button" className="btn btn-primary" onClick={() => this.sendForm()}>Acessar</button>
                    </div>
                </div>
            </div >
        );
    }

}

export default Login;
