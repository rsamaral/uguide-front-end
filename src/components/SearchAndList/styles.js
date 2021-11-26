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

export const SearchListContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`

export const SearchListInput = styled.input`
  display: flex;
  justify-content: center;
  height: 40px;
  width: 700px;
  margin-bottom: 20px;
  border-radius: 6px;
  border: 1px solid #ced4da;
`

export const SearchListBtn = styled.button`
  height: 40px;
  width: 150px;
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  background: black;
  border: 1px solid black;
  border-radius: 6px;
`
export const SearchPasseiosTitle = styled.h5`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`

export const Passeios = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 50px;
`

export const SearchUL = styled.ul `
  margin: auto auto auto -15px;
  padding: 0px important;
`

export const SearchList = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 700px;
  margin-bottom: 20px;
  border-radius: 6px !important;
  border: 1px solid #ced4da;
  cursor: pointer;

`