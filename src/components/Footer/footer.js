import React from 'react';
import {
  FooterContainer,
  FooterIcons,
  FooterOptions,
  FooterText,
} from './styles.js';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterOptions>
        Learn More
        <FooterText>About</FooterText>
        <FooterText>Contact</FooterText>
      </FooterOptions>

      <FooterOptions>
        Make Your Reservation
        <FooterText>Login</FooterText>
        <FooterText>Register</FooterText>
      </FooterOptions>

      <FooterOptions>
        Advertise Here
        <FooterText>Special Plans</FooterText>
        <FooterText>Become a Contributor</FooterText>
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
