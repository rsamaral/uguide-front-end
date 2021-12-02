import React from "react"
import { MainContainer, Header } from "./styles";
import { history } from '../../helpers/history';

export const Confirmacao = () => {
  return(
    <MainContainer>
      <Header>
        Parabéns, sua reserva foi efetuada com sucesso!
      </Header>
    </MainContainer>
  )
}

export default Confirmacao
