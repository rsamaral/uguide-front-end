import React, { Fragment } from 'react';
import {
  Img,
  MainContainer,
  GlobalStyle,
  Header,
  HeaderSearch,
} from './styles.js';
import Images from '../../assets/images/Images.js';
import Carousel, { CarouselItem } from '../../components/Carousel/Carousel.js';
import Search from '../../components/Search/Search.js';
import Footer from '../../components/Footer/Footer.js';

export const Home = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <MainContainer>
        <Header>Get access to the best tours all in one place!</Header>

        <Carousel>
          <CarouselItem>
            <Img src={Images.toronto} alt='Toronto' />
          </CarouselItem>

          <CarouselItem>
            <Img src={Images.gramado} alt='Gramado' />
          </CarouselItem>

          <CarouselItem>
            <Img src={Images.paris} alt='Paris' />
          </CarouselItem>
        </Carousel>

        <Search />
      </MainContainer>

      <Footer />
    </Fragment>
  );
};

export default Home;
