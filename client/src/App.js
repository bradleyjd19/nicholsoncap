import React, { Component } from "react";
import  { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Firm from "./pages/Firm";
import Wealth from "./pages/Wealth";
import Retire from "./pages/Retire";
import Consult from "./pages/Consult";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/firm" component={Firm} />
            <Route exact path="/wealth" component={Wealth} />
            <Route exact path="/retire" component={Retire} />
            <Route exact path="/consult" component={Consult} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;