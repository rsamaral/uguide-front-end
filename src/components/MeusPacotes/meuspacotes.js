import React, { Component } from "react";
import { connect } from "react-redux";
import { retrieveTour, findByGuide } from "../../actions/uguide-actions/tour";
import { Header, MainContainer, PacotesContainer, PacotesList, PacotesListItens, ItensTitle, NavBtn, NavBtnLinkB, ExcluirBtn, FooterPacotes } from "./styles";

class MeusPacotes extends Component {
  constructor(props) {
    super(props);
    this.findByGuide = this.findByGuide.bind(this);
  }

  componentDidMount(){
    this.findByGuide(this.props.user.user.id)
  }

  findByGuide (guide) {
    this.props.findByGuide(guide)
  }

  
  render() {
    const { tours } = this.props;

    console.log(tours)

    return (
      <MainContainer>
        <Header>
        Meus Pacotes
        </Header>
        <PacotesContainer>
          {tours.length == 0 && (
            <h4>Você ainda não tem Pacotes cadastrados. Cadastre agora!</h4>
          )}
          {tours.map(tour => 
            <PacotesList>
              <PacotesListItens>
                <ItensTitle>
                  Pacote:
                </ItensTitle>
                {tour.title}
              </PacotesListItens>
              <PacotesListItens>
                <ItensTitle>
                  Descrição:
                </ItensTitle>
                {tour.description}
              </PacotesListItens>
              <PacotesListItens>
                <ItensTitle>
                  Preço:
                </ItensTitle>
                {tour.price}
              </PacotesListItens>
              <PacotesListItens>
                <ItensTitle>
                  Cidade:
                </ItensTitle>
                {tour.city}
              </PacotesListItens>
              <PacotesListItens>
                <ItensTitle>
                  Data:
                </ItensTitle>
                {tour.data}
              </PacotesListItens>
              <PacotesListItens>
                <ItensTitle>
                  Horário:
                </ItensTitle>
                {tour.time}
              </PacotesListItens>
              <FooterPacotes>
              <NavBtn>
                <NavBtnLinkB to={"/tour/" + tour.id}>
                  Editar Passeio
                </NavBtnLinkB>
                <ExcluirBtn>
                  Excluir Pacote
                </ExcluirBtn> 
              </NavBtn> 
              </FooterPacotes>
            </PacotesList>
          )}
        </PacotesContainer>  
      </MainContainer>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    tours: state.tours,
    user: state.auth,
  };
};

export default connect(mapStateToProps, { retrieveTour, findByGuide })(MeusPacotes);