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
import Tour from "../../components/tour"
import {Nav, NavBtn, NavLink, NavBtnLinkB, NavBtnLinkW, NavMenu, AvatarUser, NavBtnLinkAvatar, NavBtnAvatar} from "./styles"
import { logout } from "../../actions/auth-actions/auth";
import { clearMessage } from "../../actions/auth-actions/message";

import { history } from '../../helpers/history';
import MeuCadastro from "../../pages/MeuCadastro/meucadastro";
import MeusPacotes from "../../pages/MeusPacotes/meusPacotes"
import MeusPagamentos from "../../pages/MeusPagamentos/MeusPagamentos"
import MinhasReservas from "../../pages/MinhasReservas/Reservas"
import Confirmacao from "../../pages/Confirmacao/confirmacao"

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
            <NavLink to={"/inicio"}>
                Início
            </NavLink>
            <NavLink to={"/sobre"}>
                Sobre
            </NavLink>
            <NavLink to={"/contato"}>
              Contato
            </NavLink>
            {!currentUser ?
            <Fragment>
              <NavBtn>
                <NavBtnLinkB to={"/cadastroPage"}>
                  Cadastro
                </NavBtnLinkB>
              </NavBtn>  
              <NavBtn>
                <NavBtnLinkW to={"/loginPage"}>
                  Login
                </NavBtnLinkW>
              </NavBtn>
            </Fragment>
            :
            <Fragment>
              <NavBtnAvatar>
                <NavBtnLinkAvatar to={"/perfilPage"}>
                  <AvatarUser
                    name={currentUser.fullname}
                    maxInitials="2"
                    color="fff"
                    fgColor="000"
                  />
                </NavBtnLinkAvatar>
              </NavBtnAvatar>  
              <NavBtn>
                <NavBtnLinkW to={"/loginPage"} onClick={this.logOut}>
                  Sair
                </NavBtnLinkW>
              </NavBtn>
            </Fragment>
            }
          </NavMenu>    
        </Nav>
          <div>
            <Switch>
              <Route exact path={["/inicio", "/"]}>
                <Inicio />
              </Route>
              <Route exact path={["/list"]}>
                <List />
              </Route>
              <Route exact path={["/sobre"]}>
                <Sobre />
              </Route>
              <Route exact path={["/contato"]}>
                <Contato />
              </Route>
              <Route exact path={["/cadastroPage"]}>
                <Cadastro />
              </Route>
              <Route exact path={["/loginPage"]}>
                <Login />
              </Route>
              <Route exact path={["/perfilPage"]}>
                <PerfilPage />
              </Route>
              <Route exact path="/add" component={AddTour} />
              <Route exact path={["/meucadastro"]}>
                <MeuCadastro />
              </Route>
              <Route exact path={["/meuspacotes"]}>
                <MeusPacotes />
              </Route>
              <Route exact path={["/meuspagamentos"]}>
                <MeusPagamentos />
              </Route>
              <Route exact path={["/minhasreservas"]}>
                <MinhasReservas />
              </Route>
              <Route exact path={["/confirmacao"]}>
                <Confirmacao />
              </Route>
              <Route path="/tour/:id" component={Tour} />
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