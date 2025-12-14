import styled from 'styled-components';

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

export const AccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  margin: auto;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
`;

export const AccountItem = styled.div`
  display: flex;
  background-color: #e5e5e5;
  align-items: center;
  width: 80%;
  height: 80px;
  border: 1px solid transparent;
  border-radius: 10px;
  font-size: 20px;
  justify-content: center;
`;

export const ItemLabel = styled.h5`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  margin-top: 20px;
`;

export const CustomBtn = styled.button`
  height: 60px;
  width: 80%;
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  background: black;
  border: 1px solid black;
  border-radius: 6px;
  margin-top: 20px;
`;
