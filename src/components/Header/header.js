import React, { Fragment } from "react"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"

import Inicio from "../../pages/Inicio/inicio";
import List from "../../pages/List/list.js";
import Sobre from "../../pages/Sobre/sobre";
import Contato from "../../pages/Contato/contato";
import {Nav, NavBtn, NavLink, NavBtnLinkB, NavBtnLinkW, NavMenu} from "./styles"

export const Header = () => {
  return (
    <Router>
      <Fragment>
      <Nav>
        <NavMenu>
          <NavLink to={"/Inicio"}>
              Início
            </NavLink>
          <NavLink to={"/Sobre"}>
              Sobre
              </NavLink>
            <NavLink to={"/Contato"}>
              Contato
              </NavLink>
            <NavBtn>
              <NavBtnLinkB to={"/List"}>
                Login
              </NavBtnLinkB>
            </NavBtn>  
            <NavBtn>
              <NavBtnLinkW to={"/"}>
                Cadastro
              </NavBtnLinkW>
            </NavBtn>
        </NavMenu>    
            {/* <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Adicionar um novo Pacote
              </Link>
            </li> */}
          </Nav>
        <div>
          <Switch>
            <Route exact path={["/Inicio", "/"]}>
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
      </Fragment> 
    </Router>
  )
}

export default Header