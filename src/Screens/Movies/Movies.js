import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./style.css";

export class Movies extends Component {
  render() {
    return (
      <div className="profile">
        <h1>Фильмы</h1>
        <ol class="rectangle">
          <li>
            <a href="#">Титаник</a>
          </li>
          <li>
            <a href="#">Побег из Шоушэнка</a>
          </li>
          <li>
            <a href="#">Художественный фильм "Урвали"</a>
          </li>
          <li>
            <a href="#">Бойцовский Клуб</a>
          </li>
          <li>
            <a href="#">Диктатор</a>
          </li>
        </ol>
        <div></div>
      </div>
    );
  }
}

export default Movies;
