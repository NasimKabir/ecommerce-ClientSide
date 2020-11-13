import React, { Component } from 'react';
import AuthenticationService from'../services/AuthenticationService';

class FromValidation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        this.handleChange=this.handleChange.bind(this)
        this.login=this.login.bind(this)
    }

    handleChange=(event)=> {
        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        )
    }

    login = ( e)=> {
        e.preventDefault();
        let employee = {username: this.state.username, password: this.state.password};
        console.log( JSON.stringify(employee));
        AuthenticationService
        .executeJwtAuthenticationService(this.state.username, this.state.password)
        .then(() => {
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
            console.log("Logedin success")
           // this.props.history.push(`/courses`)
        }).catch(() => {
            this.setState({ showSuccessMessage: false })
            this.setState({ hasLoginFailed: true })
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3">
                        <div className="card-body">
                        <h1>Login From</h1>
                            <form>
                                <div className="form-group">
                                    <label> Username: </label>
                                    <input placeholder="User Name" name="username" className="form-control"
                                        value={this.state.username} onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label> Password: </label>
                                    <input placeholder="Password" name="password" className="form-control"
                                        value={this.state.password} onChange={this.handleChange} />
                                </div>
            

                                <button className="btn btn-success" onClick={this.login}>Save</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FromValidation;