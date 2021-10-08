import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"

import AddTour from "./components/add-tour";
import Tour from "./components/tour";
import TourList from "./components/tour-list";

class App extends Component {
  render() {
    return (
      <Router>
        <nav className ="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/tour"} className="navbar-brand">
            Uguide
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/tour"} className="nav-link">
                Tour
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>  

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/tour"]} component={TourList} />
            <Route exact path="/add" component={AddTour} />
            <Route path="/tour/:id" component={Tour} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;