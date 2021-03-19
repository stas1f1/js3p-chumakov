import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import store from "../../Navigation";
import "./Login.css";
import { Redirect } from "react-router-dom";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { login: "", password: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    if (this.state.login === "Admin" && this.state.password === "12345") {
      store.dispatch({ type: "LOGIN" });
      console.log("logged in, store state: ", store.getState().loggedIn);
      //this.props.history.push("/profile");
    } else alert("Имя пользователя или пароль введены не верно");

    event.preventDefault();
  }

  render() {
    return (
      <div className="login">
        <form className="login__form" onSubmit={this.handleSubmit}>
          <h1>Login here</h1>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => this.setState({ login: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          <button type="submit" className="submit__btn">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
