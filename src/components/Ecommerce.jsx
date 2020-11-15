import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AuthenticatedRoute from './AuthenticatedRoute '
import Login from './Login'
import Logout from './Logout'
import Home from './Home'
import Register from './Register'


class ecommerce extends Component {
    render() {
        return (
            <div>
                 <Router>
                    <>
                      
                        <Switch>
                            <Route path="/" exact component={Login} />
                            <Route path="/login" component={Login} />
                            <Route path="/home" component={Home} />
                            <Route path="/register" component={Register} />
                            <AuthenticatedRoute path="/logout" component={Logout} />

                            {/* <Route component={ErrorComponent} /> */}
                        </Switch>
                      
                    </>
                </Router>
            </div>
        );
    }
}

export default ecommerce;