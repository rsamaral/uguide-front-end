import styled from "styled-components";

export const MainContainer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap');
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  font-family: Comfortaa;
`

export const Header = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
`

export const CadastroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 85%;
  margin: auto;
`

export const CadastroItens = styled.div`
  display: flex;
  background-color: #E5E5E5;
  align-items: center;
  width: 35%;
  height: 80px;
  border: 1px solid transparent;
  border-radius: 10px;
  font-size: 20px;
  justify-content: center;
`
export const ItensTitle = styled.h5`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  margin-top: 20px;
`