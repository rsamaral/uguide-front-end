import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { Header, NomeCard, MainContainer, AvatarUser, BtnCard, BtnContainer } from "./styles";
import { history } from '../../helpers/history';

class Perfil extends Component {

  render() {
    const { user: currentUser} = this.props;

    function cadastrarOnClick () {
      history.push("/add")
      window.location.reload()
    }

    function meuCadastroOnClick() {
      history.push("/meucadastro")
      window.location.reload();
    }

    function meusPacotesOnClick () {
      history.push("/meuspacotes")
      window.location.reload()
    }

    function buscarOnClick() {
      history.push("/list")
      window.location.reload();
    }

    function meusPagamentosOnClick() {
      history.push("/meuspagamentos")
      window.location.reload();
    }

    function minhasReservasOnClick() {
      history.push("/minhasreservas")
      window.location.reload();
    }

    if (!currentUser) {
      return <Redirect to="/loginpage" />;
    }

    return (
      <MainContainer>
        <Header>
        Meu Perfil
      </Header>

      {currentUser.roles &&
        currentUser.roles.map((role, index) => {
          if(role === "ROLE_GUIA") {
            return(
              <div>
                <NomeCard>
                  <AvatarUser 
                    name={currentUser.fullname} 
                    maxInitials="2"
                  />  
                  {currentUser.fullname}
                </NomeCard>
                <BtnContainer>
                  <BtnCard onClick={meusPacotesOnClick}>
                    Meus Pacotes
                  </BtnCard>
                  <BtnCard onClick={meuCadastroOnClick}>
                    Meu Cadastro
                  </BtnCard>
                  <BtnCard onClick={meusPagamentosOnClick}>
                    Meus Pagamentos
                  </BtnCard>
                  <BtnCard onClick={cadastrarOnClick}>
                    Cadastrar Novo Passeio
                  </BtnCard>
                </BtnContainer>
                {/* <p>
                  <strong>Telefone:</strong> {currentUser.cellphone}
                </p>
                <p>
                  <strong>País:</strong> {currentUser.country}
                </p>
                <p>
                  <strong>E-mail:</strong> {currentUser.email}
                </p>
                  <strong>Tipo de Usuário:</strong>
                <ul>
                {currentUser.roles &&
                  currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
              </ul> */}
              </div>
            )
          } else if(role === "ROLE_TURISTA") {
            return(
              <div>
                <NomeCard>
                  <AvatarUser 
                    name={currentUser.fullname} 
                    maxInitials="2"
                  />
                  {currentUser.fullname}
                </NomeCard>
                <BtnContainer>
                  <BtnCard onClick={minhasReservasOnClick}>
                    Minhas Reservas
                  </BtnCard>
                  <BtnCard onClick={meusPagamentosOnClick}>
                    Meus Pagamentos
                  </BtnCard>
                  <BtnCard onClick={meuCadastroOnClick}>
                    Meu Cadastro
                  </BtnCard>
                  <BtnCard onClick={buscarOnClick}>
                    Buscar Novo Passeio
                  </BtnCard>
                </BtnContainer>
              </div>
            )
          } else {  
            return(
              <div>
                <NomeCard>
                  <AvatarUser 
                    color={AvatarUser.getRandomColor('sitebase', ['red', 'green', 'blue'])} 
                    name={currentUser.fullname} 
                    maxInitials="2"
                  />
                  {currentUser.fullname}
                </NomeCard>
                <h2>Olá Admin!</h2>
              </div>
            )
          }
        })}
        </MainContainer>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps)(Perfil);