import React, { Component } from "react";
import { connect } from "react-redux";
import { Header, MainContainer, CadastroContainer, CadastroItens, ItensTitle } from "./styles";

class meuCadastroComponent extends Component {

  render() {
    const { user: currentUser} = this.props;
    return (
      <MainContainer>
        <Header>
        Meu Cadastro
        </Header>
        <CadastroContainer>
          <ItensTitle>
            Nome:
          </ItensTitle>
          <CadastroItens>
            {currentUser.fullname}
          </CadastroItens>
          <ItensTitle>
            Telefone:
          </ItensTitle>
          <CadastroItens>
            {currentUser.cellphone}
          </CadastroItens>
          <ItensTitle>
            País:
          </ItensTitle>
          <CadastroItens>
            {currentUser.country}
          </CadastroItens>
          <ItensTitle>
            E-mail:
          </ItensTitle>
          <CadastroItens>
            {currentUser.email}
          </CadastroItens>
        </CadastroContainer>  
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

export default connect(mapStateToProps)(meuCadastroComponent);