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

export const FormContent = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`

export const FormInput = styled.input`
  display: flex;
  justify-content: center;
  height: 50px;
  width: 500px;
  margin-bottom: 40px;
  box-shadow: 0 0 5px gray;
  border-radius: 10px;
`

export const FormMessage = styled.textarea`
  display: flex;
  justify-content: center;
  height: 250px;
  width: 500px;
  margin-bottom: 40px;
  box-shadow: 0 0 5px gray;
  border-radius: 10px;
`

export const FormBtn = styled.button`
  height: 50px;
  width: 500px;
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  background: black;
  border: 1px solid black;
  border-radius: 10px;
`

export const ErrorMessage = styled.p`
  margin-top: -33px;
  font-size: 12px;
  color: red
`