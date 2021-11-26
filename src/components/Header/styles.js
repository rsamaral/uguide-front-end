import styled from "styled-components"; 
import Avatar from 'react-avatar';
import { NavLink as Link } from "react-router-dom";

export const Nav = styled.nav`
  height: 40px;
  display: flex;
  justify-content: flex-end;
  &:nth-child(1) {
    margin-right: 20px;
  }
`

export const NavLink = styled(Link)`
  color: black;
  display: flex;
  padding: 20px 30px 20px 0px;
  height: 100%;
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
`

export const NavBtn = styled.nav`
  height: 38px;
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  border: 1px solid black;
  border-radius: 10px;
  margin: 20px 30px 0px 0px;

  @media screen and (max-width: 768px) {
    display: none;
  }
  &:nth-last-child(1) {
    background: black;
  }
`;

export const NavBtnLinkB = styled(Link)`
  color: black;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  font-weight: bold;
`;

export const NavBtnLinkW = styled(Link)`
  color: white;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  font-weight: bold;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBtnAvatar = styled.nav`
  height: 38px;
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #E5E5E5;
  border: 1px solid transparent;
  border-radius: 10px;
  margin: 20px 30px 0px 0px;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;


export const NavBtnLinkAvatar = styled(Link)`
  color: black;
  outline: none;
  cursor: pointer;
  text-decoration: none;
`;

export const AvatarUser = styled(Avatar)`
  cursor: pointer;
  width: 50px !important;
  height: 50px !important;
`