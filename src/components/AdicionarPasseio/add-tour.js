import React, { Component } from "react";
import { connect } from "react-redux";
import { createTour } from "../../actions/uguide-actions/tour";
import { MainContainer, Header, FormAddInput, FormAddContent, FormAddBtn, FormAddDesc } from "./styles";

class AddTour extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.saveTour = this.saveTour.bind(this);
    this.newTour = this.newTour.bind(this);

    this.state = {
      id: null,
      title: "",
      description: "",
      data: "",
      price: "",
      submitted: false,
    };
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onChangePrice(e) {
    this.setState({
      price: e.target.value,
    });
  }

  saveTour() {
    const { title, description, price} = this.state;

    this.props
      .createTour(title, description, price)
      .then((data) => {
        this.setState({
          id: data.id,
          title: data.title,
          description: data.description,
          price: data.price,

          submitted: true,
        });
        console.log(data)
      })
      .catch((e) => {
        console.log(e);
      })
  }

  newTour(){
    this.setState({
      id: null,
      title: "",
      description: "",
      price: "",
      data: "",

      submitted: false,
    });
  }  
  render(){
    return (
      <MainContainer>
        <Header>
          Cadastrar Novo Passeio
        </Header>
        <FormAddContent>
          {this.state.submitted ? (
            <div>
              <h4>Seu pacote foi adicionado com sucesso!</h4>
            </div>
        ) : (
          <div>
            <FormAddInput
              type="text"
              placeholder="Título do Passeio"
              id="title"
              required
              value={this.state.title}
              onChange={this.onChangeTitle}
              name="title"
            />

            <FormAddDesc
              type="text"
              placeholder="Descrição"
              id="description"
              required
              value={this.state.description}
              onChange={this.onChangeDescription}
              name="description"
            />

            <FormAddInput
              type="text"
              placeholder="Preço"
              id="price"
              required
              value={this.state.price}
              onChange={this.onChangePrice}
              name="price"
            />

            <FormAddBtn onClick={this.saveTour}>
              Adicionar
            </FormAddBtn>
          </div>
        )}
      </FormAddContent>
      </MainContainer>
     
    )
  }
}

export default connect(null, { createTour })(AddTour);