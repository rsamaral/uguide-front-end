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
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeData = this.onChangeData.bind(this);
    this.onChangeTime = this.onChangeTime.bind(this);
    this.saveTour = this.saveTour.bind(this);
    this.newTour = this.newTour.bind(this);

    this.state = {
      id: null,
      title: "",
      description: "",
      data: "",
      city: "",
      time: "",
      price: "",
      guide: "",
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

  onChangeCity(e) {
    this.setState({
      city: e.target.value,
    });
  }

  onChangeTime(e) {
    this.setState({
      time: e.target.value,
    });
  }

  onChangeData(e) {
    this.setState({
      data: e.target.value,
    });
  }

  saveTour() {
    const { title, description, price, data, time, city} = this.state;

    const { user: currentUser} = this.props;

    const guide = currentUser.id;

    this.props
      .createTour(title, description, price, guide, data, time, city)
      .then((data) => {
        this.setState({
          id: data.id,
          title: data.title,
          description: data.description,
          price: data.price,
          guide: data.guide,
          data: data.data,
          city: data.city,
          time: data.time,
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
      guide: "",
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

            <FormAddInput
              type="text"
              placeholder="Data"
              id="data"
              required
              value={this.state.data}
              onChange={this.onChangeData}
              name="data"
            />

            <FormAddInput
              type="text"
              placeholder="Cidade"
              id="city"
              required
              value={this.state.city}
              onChange={this.onChangeCity}
              name="city"
            />

            <FormAddInput
              type="text"
              placeholder="Horário"
              id="time"
              required
              value={this.state.time}
              onChange={this.onChangeTime}
              name="time"
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

function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps, { createTour })(AddTour);