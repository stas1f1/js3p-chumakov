import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Login from "../Screens/Login";
import Movies from "../Screens/Movies";
import Profile from "../Screens/Profile";
//import Home from "../Screens/Home";
import store from "../store";

function AuthenticatedRoute({ component: Component, ...rest }) {
  alert("routing, store state: ", store.getState().loggedIn);
  return (
    <Route
      {...rest}
      render={(props) =>
        store.getState().loggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
}

class Navigation extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route path="/movies" component={Movies} />
          <AuthenticatedRoute exact path="/profile" component={Profile} />
          {/*//
          <Route path="/movies" component={Movies} />
          //
          <AuthenticatedRoute exact path="/profile" component={Profile} />
          //
          <Route path="*" component={Main} />
          */}
        </Switch>
      </Router>
    );
  }
}

export default Navigation;
