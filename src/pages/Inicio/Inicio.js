import React, { Fragment } from "react";
import { Img, MainContainer, GlobalStyle, Header} from "./styles.js"
import Images from "../../assets/images/Images.js"

export const Home = () => {
    return (
      <Fragment>
        <GlobalStyle />
        <MainContainer>
          <Header>Tenha acesso aos melhores passeios em uma só plataforma!</Header>
          <Img src={Images.gramado} alt={"Gramado"} />
        </MainContainer>  
      </Fragment>

    )
  }

  export default Home
