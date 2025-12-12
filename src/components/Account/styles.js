import styled from "styled-components";
import Avatar from 'react-avatar';



export const MainContainer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap');
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  font-family: Comfortaa;
  justify-content: center;
`

export const Header = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  margin-bottom: 30px;
`

export const NomeCard = styled.div`
  background-color: #E5E5E5;
  display: flex;
  align-items: center;
  margin: auto;
  width: 85%;
  height: 120px;
  border: 1px solid transparent;
  border-radius: 10px;
  font-size: 30px;
`

export const AvatarUser = styled(Avatar)`
  height: 70px !important;
  width: 70px !important;
  border-radius: 50% !important;
  margin-left: 10px;
  margin-right: 30px;
`

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 40px;
  justify-content: space-between;
  width: 85%;
  margin: auto;
`

export const BtnCard = styled.button`
  background-color: #E5E5E5;
  align-items: center;
  width: 35%;
  height: 110px;
  border: 1px solid transparent;
  border-radius: 10px;
  font-size: 25px;
  margin-top: 70px;
`