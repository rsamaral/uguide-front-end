import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const MainContainer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap');
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  font-family: Comfortaa;
`;

export const Header = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
`;

export const PackagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 85%;
  margin: auto;
`;

export const PackageList = styled.ul`
  display: flex;
  background-color: #e5e5e5;
  align-items: center;
  width: 800px;
  height: 220px;
  border: 2px solid #ced4da;
  border-radius: 10px;
  font-size: 20px;
  justify-content: center;
  margin: 40px auto auto auto;
  padding: 0px;
  flex-direction: column;
`;

export const PackageListItem = styled.li`
  display: flex;
  width: 99%;
  height: 16%;
  border: 1px solid #e5e5e5;
  border-radius: 6px;
  font-size: 18px;
  background-color: white;
  align-items: center;
`;

export const ItemTitle = styled.h5`
  display: flex;
  font-size: 18px;
  font-weight: bold;
  margin-right: 6px;
  margin-bottom: 0px;
`;

export const NavBtnLinkB = styled(Link)`
  display: flex;
  font-size: 18px;
  color: white;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 30px;
  background: black;
  border: 1px solid transparent;
  border-radius: 6px;
`;

export const NavBtn = styled.nav`
  height: 40px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid transparent;
  margin: auto;
  font-size: 18px;
`;

export const DeleteBtn = styled.button`
  height: 30px;
  width: 200px;
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  background: black;
  border: 1px solid black;
  border-radius: 6px;
  font-size: 15px;
`;

export const PackageFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  margin: auto;
`;
