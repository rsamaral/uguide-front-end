import React, { Component } from "react";
import { connect } from "react-redux";
import { createTour } from "../actions/tour";

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
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>Seu pacote foi adicionado com sucesso!</h4>
            <button className="btn btn-success" onClick={this.newTour}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="title">Título</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={this.state.title}
                onChange={this.onChangeTitle}
                name="title"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Descrição</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={this.state.description}
                onChange={this.onChangeDescription}
                name="description"
              />
            </div>

            <div className="form-group">
              <label htmlFor="price">Preço</label>
              <input
                type="text"
                className="form-control"
                id="price"
                required
                value={this.state.price}
                onChange={this.onChangePrice}
                name="price"
              />
            </div>

            <button onClick={this.saveTour} className="btn btn-success">
              Adicionar
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default connect(null, { createTour })(AddTour);