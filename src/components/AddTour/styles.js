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

export const FormAddContent = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`

export const FormAddInput = styled.input`
  display: flex;
  justify-content: center;
  height: 50px;
  width: 500px;
  margin-bottom: 20px;
  border-radius: 6px;
  border: 1px solid #ced4da;
`

export const FormAddBtn = styled.button`
  height: 50px;
  width: 500px;
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  background: black;
  border: 1px solid black;
  border-radius: 6px;
`

export const FormAddDesc = styled.textarea`
  display: flex;
  justify-content: center;
  height: 250px;
  width: 500px;
  margin-bottom: 20px;
  border-radius: 6px;
  border: 1px solid #ced4da;
`