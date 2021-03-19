import React, { Component } from "react";
import "./style.css";
import { Link, Router } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <header>
        <a href="/">На главную</a>
        <a href="movies">Фильмы</a>
        <a href="profile">Профиль</a>
      </header>
    );
  }
}

export default Header;
