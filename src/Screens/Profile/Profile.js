import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./style.css";

export class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <p1>Вы авторизованы в системе</p1>
        <div></div>
      </div>
    );
  }
}

export default Profile;
