import React, { Fragment } from "react";
import { Img, MainContainer, GlobalStyle, Header, HeaderSearch} from "./styles.js"
import Images from "../../assets/images/Images.js"
import Carrossel, {CarrosselItem} from "../../components/Carrossel/carrossel"
import Search from "../../components/Search/search";
import Footer from "../../components/Footer/footer"

export const Home = () => {
    return (
      <Fragment>
        <GlobalStyle />
        <MainContainer>
          <Header>Tenha acesso aos melhores passeios em uma só plataforma!</Header>
          <Carrossel>
            <CarrosselItem>
              <Img src={Images.toronto} alt={"Toronto"} />
            </CarrosselItem>
            <CarrosselItem>
              <Img src={Images.gramado} alt={"Gramado"} />
            </CarrosselItem>
            <CarrosselItem>
              <Img src={Images.paris} alt={"Paris"} />
            </CarrosselItem>
          </Carrossel>
            <Search />
        </MainContainer>  
        <Footer />
      </Fragment>

    )
  }

  export default Home
