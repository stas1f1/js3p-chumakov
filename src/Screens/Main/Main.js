import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./style.css";

export class Main extends Component {
  render() {
    return (
      <div className="profile">
        <h1>Тестовый проект на React + Redux</h1>
        <div></div>
      </div>
    );
  }
}

export default Main;
