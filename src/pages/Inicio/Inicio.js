import React, { Fragment } from "react";
import { Img, MainContainer, GlobalStyle} from "./Styled.js"
import Images from "../../assets/images/Images.js"

export const Home = () => {
    return (
      <Fragment>
        <GlobalStyle />
        <MainContainer>
          <h1>Tenha acesso aos melhores passeios em uma só plataforma!</h1>
          <Img src={Images.gramado} alt={"Gramado"} />
        </MainContainer>  
      </Fragment>

    )
  }

  export default Home
