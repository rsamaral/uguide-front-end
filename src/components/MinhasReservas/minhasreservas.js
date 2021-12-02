import React, { Component } from "react";
import { connect } from "react-redux";
import { retrieveTour, findByTourist, updateTour } from "../../actions/uguide-actions/tour";
import { Header, MainContainer, PacotesContainer, PacotesList, PacotesListItens, ItensTitle, ExcluirBtn, FooterPacotes } from "./styles";

class MinhasReservas extends Component {
  constructor(props) {
    super(props);
    this.findByTourist = this.findByTourist.bind(this);
  }

  componentDidMount(){
    this.findByTourist(this.props)
  }

  findByTourist (tourist) {
    this.props.findByTourist(tourist)
  }

  cancelaReserva(id, tour){
    tour.tourist = null
      this.props
        .updateTour(id, tour)
        .then((response) => {
          console.log(response);
          
          this.setState({ message: "The tutorial was updated successfully!" });
        })
        .catch((e) => {
          console.log(e);
        });
  }
  
  

  render() {
    const { tours } = this.props;

    console.log(tours)

    return (
      <MainContainer>
        <Header>
        Minhas Reservas
        </Header>
        <PacotesContainer>
          {tours.length == 0 && (
            <h4>Você ainda não tem Pacotes reservados. Reserve agora!</h4>
          )}
          {tours.map(tour => 
            tour.tourist == null ?
            <h1></h1>
            :
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
                  <ExcluirBtn onClick={() => {this.cancelaReserva(tour.id, tour)}}>
                    Cancelar Reserva
                  </ExcluirBtn> 
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

export default connect(mapStateToProps, { retrieveTour, findByTourist, updateTour })(MinhasReservas);