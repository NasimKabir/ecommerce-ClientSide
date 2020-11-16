import React, { Component } from 'react';
import UserRegister from '../services/UserRegisterService'

class register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            email: '',
            phone: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.register = this.register.bind(this)
    }

    handleChange = (event) => {
        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        )
    }

    register = (e) => {
        e.preventDefault();
        let employee = { username: this.state.username, email: this.state.email, phone: this.state.phone, password: this.state.password };
        UserRegister.createEmployee(employee).then(
          ()=>  this.props.history.push('/home'))
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3">
                        <div className="card-body">
                            <h1>User Register From</h1>
                            <form>
                                <div className="form-group">
                                    <label> Username: </label>
                                    <input placeholder="User Name" name="username" className="form-control"
                                        value={this.state.username} onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label> Email: </label>
                                    <input placeholder="Password" name="email" className="form-control"
                                        value={this.state.email} onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label> Phone: </label>
                                    <input placeholder="User Name" name="phone" className="form-control"
                                        value={this.state.phone} onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label> Password: </label>
                                    <input placeholder="Password" name="password" className="form-control"
                                        value={this.state.password} onChange={this.handleChange} />
                                </div>


                                <button className="btn btn-success" onClick={this.register}>Save</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default register;