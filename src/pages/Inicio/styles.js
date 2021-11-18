import styled from "styled-components"; 
import { createGlobalStyle } from "styled-components";
import Images from "../../assets/images/Images.js"


export const GlobalStyle = createGlobalStyle`
  body{
    background: url(${Images.backgroundInicio});
  }
`

export const MainContainer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap');
  display: flex;
  font-family: Comfortaa;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`

export const Img = styled.img`
  height: 400px;
  width: 600px;
  margin-top: 50px;
`

export const Header = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
`