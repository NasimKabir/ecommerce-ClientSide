import React, { Component } from 'react';
import AuthenticationService from '../services/AuthenticationService';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

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
    signup=()=>{
        this.props.history.push(`/register`)
    }

    render() {
        return (
            <div className="container mt-5">
                <div className="login-wrap">
                    <div className="card col-md-4 offset-md-4">
                        <div className="card-body">
                        <h1><span class="badge badge-white offset-5"><FontAwesomeIcon icon="lock"/></span></h1>
                        <p class="login-img"></p>
                            <form>
                                <div className="input-group">
                                    <span><FontAwesomeIcon icon="user"/></span>
                                    <input type="text" placeholder="User Name" name="username" className="form-control"
                                        value={this.state.username} onChange={this.handleChange} />
                                </div>
                                <br/>
                                <div className="input-group">
                                <FontAwesomeIcon icon="key"/>
                                    <input type="password" placeholder="Password" name="password" className="form-control"
                                        value={this.state.password} onChange={this.handleChange} />
                                </div>
                                <br/>
                                <label class="checkbox">
                                    <input type="checkbox" value="remember-me" /> Remember me
                                     <span class="pull-right"> <a href="#"> Forgot Password?</a></span>
                               </label>

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

export default FromValidation;