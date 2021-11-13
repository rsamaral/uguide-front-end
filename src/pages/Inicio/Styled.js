import styled from "styled-components"; 
import { createGlobalStyle } from "styled-components";
import Images from "../../assets/images/Images.js"


export const GlobalStyle = createGlobalStyle`
  body{
    background: url(${Images.backgroundInicio});
  }
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Img = styled.img`
  height: 400px;
  width: 600px;
`
