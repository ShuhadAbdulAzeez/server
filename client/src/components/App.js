import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import "../App.css";

import Header from "./Header";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import surveyNew from "./surveys/SurveyNew";
import Login from "./Login";
import Register from "./Register";
class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="container">
          {!(window.location.pathname === "/login" || window.location.pathname === "/signup") && <Header />}
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={surveyNew} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
