import React, { Component } from "react";
import Movies from "./Movies";
import Navbar from "./Navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import Contact from "./Contact";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import MovieForm from "./MovieForm";
import NotFound from "./NotFound";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container mt-2">
          <Switch>
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
