import React, { Component } from "react";
import Movies from "./Movies";
import Navbar from "./Navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import Contact from "./Contact";
import Login from "./Login";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container mt-2">
          <Switch>
            <Route path="/movies" component={Movies} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
            <Redirect to="/movies" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
