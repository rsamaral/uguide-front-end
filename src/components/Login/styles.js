import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import styled from "styled-components"; 
import { NavLink as Link } from "react-router-dom";


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

export const FormLogin = styled(Form)`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  flex-direction: column;
  align-items: center;
`

export const InputLogin = styled(Input)`
  display: flex;
  justify-content: center;
  height: 50px;
  width: 300px;
  margin-bottom: 20px;
  border-radius: 6px;
  border: 1px solid #ced4da;
`

export const BtnLogin = styled(CheckButton)`
  height: 50px;
  width: 300px;
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  background-color: black !important;
  border-radius: 6px;
`

export const ErrorMessage = styled.p`
  margin-top: -15px;
  font-size: 12px;
  color: red;
`

export const ForgetLink = styled(Link)`
  color: black;
  outline: none;
  cursor: pointer;
  text-decoration: none;
`

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`