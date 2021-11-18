import React from "react";
import { Header, MainContainer, Title, SobreContent } from "../Sobre/styles";

export const Sobre = () => {
  return (
    <MainContainer>
      <Header>Sobre</Header>
      <Title>
        Olá, nós somos o Uguide!
      </Title>
      <SobreContent>
        O Projeto UGuide é composto por alunos do curso de Análise e Desenvolvimento de Sistemas, do 4º período, da Universidade de Fortaleza (UNIFOR). A ideia surgiu da necessidade de desenvolver um projeto WEB como requisito para aprovação na disciplina de Projeto Aplicado de Desenvolvimento de Software II (PADS) que compõe, junto das disciplinas PADS I e PADS III, o Trabalho Final para Conclusão de Curso. 
      </SobreContent>
    </MainContainer>
  )
}

export default Sobre