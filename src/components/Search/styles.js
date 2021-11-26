import styled from "@emotion/styled";


export const MainContainer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap');
  display: flex;
  font-family: Comfortaa;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  justify-content: center;
`

export const SearchInput = styled.input`
  display: flex;
  justify-content: center;
  height: 50px;
  width: 400px;
  border-radius: 6px;
  background-color: transparent;
  border: 1px solid black;
  border-radius: 20px;
  box-shadow: 0 0 1em gray;
  text-align: center;
  outline: none;
  margin: 20px auto auto auto;
`

export const SearchBtn = styled.button`
  height: 40px;
  width: 150px;
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  background: black;
  border: 1px solid black;
  border-radius: 20px;
  margin: 20px auto auto auto;
`

export const HeaderSearch = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin-bottom: 0px;
  margin-top: 10px;
`
