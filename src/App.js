import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Navigation from "./Navigation";

import { useSelector } from "react-redux";

function App() {
  return (
    <div>
      <Header />
      <Navigation />
      {/*{user ? <Logout /> : <Login />}*/}
    </div>
  );
}

export default App;
