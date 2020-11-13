import React, { Component } from 'react';
import { Switch, Route, Link } from "react-router-dom";

class AuthenticatedRoute extends Component {
    render() {
        return (
            <div>
                 <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} />
          </Switch>
            </div>
        );
    }
}


export default AuthenticatedRoute;