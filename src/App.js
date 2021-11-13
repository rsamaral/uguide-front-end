import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"


import Inicio from "../src/pages/Inicio/Inicio.js";
import List from "../src/pages/List/List.js";
import Sobre from "../src/pages/Sobre/Sobre.js";
import Contato from "../src/pages/Contato/Contato.js";

class App extends Component {
  render() {
    return (
      <Router>
        <nav className ="navbar navbar-expand navbar-dark bg-dark">
          <div className="navbar-nav ml-auto">
          <li className="nav-item">
              <Link to={"/Inicio"} className="nav-link">
                Início
              </Link>
            </li>
          <li className="nav-item">
              <Link to={"/Sobre"} className="nav-link">
                Sobre
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/Contato"} className="nav-link">
                Contato
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/List"} className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/"} className="nav-link">
                Cadastro
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Adicionar um novo Pacote
              </Link>
            </li> */}
          </div>
        </nav>  
        <div className="container mt-3">
          <Switch>
            <Route exact path={["/Inicio"]}>
              <Inicio />
            </Route>
            <Route exact path={["/List"]}>
              <List />
            </Route>
            <Route exact path={["/Sobre"]}>
              <Sobre />
            </Route>
            <Route exact path={["/Contato"]}>
              <Contato />
            </Route>
            {/* <Route exact path="/add" component={AddTour} />
            <Route path="/tour/:id" component={Tour} /> */}
          </Switch>
        </div> 
      </Router>
    )
  }
}

export default App;