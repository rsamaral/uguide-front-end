import React from 'react';
import { Header, MainContainer, Title, SobreContent } from '../Sobre/styles';

export const About = () => {
  return (
    <MainContainer>
      <Header>About</Header>

      <Title>Hello, we are UGuide!</Title>

      <SobreContent>
        The UGuide Project is a personal side project created by me to study and
        practice React and Node.js. It originally began as a simple idea and
        evolved into a practical application where I could explore front-end and
        back-end development concepts.
      </SobreContent>
    </MainContainer>
  );
};

export default About;
