import React, { Component } from "react";
import  { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;