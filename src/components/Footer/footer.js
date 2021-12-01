import React from "react";
import {
  FooterContainer,
  FooterIcons,
  FooterOptions,
  FooterText
} from "./styles.js";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'

const Footer = () => {
return (
	<FooterContainer>
    <FooterOptions>
      Saiba Mais
      <FooterText>
        Sobre
      </FooterText>
      <FooterText>
        Contato
      </FooterText>
    </FooterOptions>
    <FooterOptions>
      Faça sua Reserva
      <FooterText>
        Login
      </FooterText>
      <FooterText>
        Cadastro
      </FooterText>
    </FooterOptions>
    <FooterOptions>
      Anuncie Aqui
      <FooterText>
        Planos Especiais
      </FooterText>
      <FooterText>
        Seja nosso Colaborador
      </FooterText>
    </FooterOptions>
    <FooterOptions>
      Social
      <FooterIcons>
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
      </FooterIcons>
    </FooterOptions>
  </FooterContainer>
);
};
export default Footer;
