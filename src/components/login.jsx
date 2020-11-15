import React, { Component } from 'react';
import AuthenticationService from '../services/AuthenticationService';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class Login extends Component {
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
        this.signup=this.signup.bind(this)
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
            .then((response) => {
                AuthenticationService.registerSuccessfulLoginForJwt(this.state.username, response.data.token)
                this.props.history.push(`/home`)
                {this.state.showSuccessMessage && <div>Login Sucessful</div>}
              //  window.location.reload()
            }).catch(() => {
                this.setState({ showSuccessMessage: false })
                this.setState({ hasLoginFailed: true })
            })
    }
    signup=()=>{
        this.props.history.push(`/register`)
    }

    render() {
        return (
            <div className="container mt-5">
                <div className="login-wrap">
                    <div className="card col-md-4 offset-md-4">
                        <div className="card-body">
                        <h1><span class="badge badge-white offset-3"><FontAwesomeIcon icon="lock" size = '5x' /></span></h1>
                        <p class="login-img"></p>
                            <form>
                                <div className="input-group">
                                    <span><FontAwesomeIcon icon="user" size = '2x'/></span>
                                    <input type="text" placeholder="User Name" name="username" className="form-control"
                                        value={this.state.username} onChange={this.handleChange} />
                                </div>
                                <br/>
                                <div className="input-group">
                                <FontAwesomeIcon icon="key" size = '2x'/>
                                    <input type="password" placeholder="Password" name="password" className="form-control"
                                        value={this.state.password} onChange={this.handleChange} />
                                </div>
                                <br/>
                                <label class="checkbox">
                                    <input type="checkbox" value="remember-me" /> Remember me
                                     <span class="pull-right"> <a href="#"> Forgot Password?</a></span>
                               </label>

                               {this.state.hasLoginFailed && <div className="alert alert-danger">Invalid Credentials</div>}

                                <button className="btn btn-primary btn-lg btn-block" onClick={this.login}>Login</button>
                                <br/>
                                <button className="btn btn-info btn-lg btn-block" onClick={this.signup}>Signup</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;