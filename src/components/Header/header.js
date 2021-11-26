import React, { Fragment, Component } from "react"
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"

import Inicio from "../../pages/Inicio/inicio";
import PerfilPage from "../../pages/Perfil/perfil";
import List from "../../pages/List/list.js";
import Sobre from "../../pages/Sobre/sobre";
import Cadastro from "../../pages/Cadastro/cadastro";
import Login from "../../pages/Login/login"
import Contato from "../../pages/Contato/contato";
import AddTour from "../../components/AdicionarPasseio/add-tour"
import {Nav, NavBtn, NavLink, NavBtnLinkB, NavBtnLinkW, NavMenu, AvatarUser, NavBtnLinkAvatar, NavBtnAvatar} from "./styles"
import { logout } from "../../actions/auth-actions/auth";
import { clearMessage } from "../../actions/auth-actions/message";

import { history } from '../../helpers/history';
import MeuCadastro from "../../pages/MeuCadastro/meucadastro";

class Header extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };

    history.listen((location) => {
      props.dispatch(clearMessage()); // clear message when changing location
    });
  }

  componentDidMount() {
    const user = this.props.user;

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    this.props.dispatch(logout());
  }

  render() {
    const { currentUser} = this.state;
    return (
      <Router forceRefresh={true}>
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
            {!currentUser ?
            <Fragment>
              <NavBtn>
                <NavBtnLinkB to={"/CadastroPage"}>
                  Cadastro
                </NavBtnLinkB>
              </NavBtn>  
              <NavBtn>
                <NavBtnLinkW to={"/LoginPage"}>
                  Login
                </NavBtnLinkW>
              </NavBtn>
            </Fragment>
            :
            <Fragment>
              <NavBtnAvatar>
                <NavBtnLinkAvatar to={"/PerfilPage"}>
                  <AvatarUser
                    name={currentUser.fullname}
                    maxInitials="2"
                    color="fff"
                    fgColor="000"
                  />
                </NavBtnLinkAvatar>
              </NavBtnAvatar>  
              <NavBtn>
                <NavBtnLinkW to={"/LoginPage"} onClick={this.logOut}>
                  Sair
                </NavBtnLinkW>
              </NavBtn>
            </Fragment>
            }
          </NavMenu>    
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
              <Route exact path={["/CadastroPage"]}>
                <Cadastro />
              </Route>
              <Route exact path={["/LoginPage"]}>
                <Login />
              </Route>
              <Route exact path={["/PerfilPage"]}>
                <PerfilPage />
              </Route>
              <Route exact path="/add" component={AddTour} />
              <Route exact path={["/MeuCadastro"]}>
                <MeuCadastro />
              </Route>
              {/* <Route path="/tour/:id" component={Tour} /> */}
            </Switch>
          </div> 
        </Fragment> 
      </Router>
    ) 
  }
}  

function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps)(Header);