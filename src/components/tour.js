import React, { Component } from "react";
import { connect } from "react-redux";
import { updateTour, deleteTour } from "../actions/tour";
import TourDataService from "../services/tour.service";

class Tour extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.getTour = this.getTour.bind(this);
    this.updateContent = this.updateContent.bind(this);
    this.removeTour = this.removeTour.bind(this);

    this.state = {
      currentTour: {
        id: null,
        title: "",
        description: "",
        price: "",
      },
      message: "",
    };
  }

  componentDidMount() {
    this.getTour(this.props.match.params.id);
  }

  onChangeTitle(e) {
    const title = e.target.value;

    this.setState(function (prevState) {
      return {
        currentTour: {
          ...prevState.currentTour,
          title: title,
        },
      };
    });
  }

  onChangeDescription(e) {
    const description = e.target.value;

    this.setState((prevState) => ({
      currentTour: {
        ...prevState.currentTour,
        description: description,
      },
    }));
  }

  onChangePrice(e) {
    const price = e.target.value;

    this.setState((prevState) => ({
      currentTour: {
        ...prevState.currentTour,
        price: price,
      },
    }));
  }

  getTour(id) {
    TourDataService.get(id)
      .then((response) => {
        this.setState({
          currentTour: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateContent() {
    this.props
      .updateTour(this.state.currentTour.id, this.state.currentTour)
      .then((reponse) => {
        console.log(reponse);
        
        this.setState({ message: "The tutorial was updated successfully!" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  removeTour() {
    this.props
      .deleteTour(this.state.currentTour.id)
      .then(() => {
        this.props.history.push("/tours");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { currentTour } = this.state;

    return (
      <div>
      {currentTour ? (
        <div className="edit-form">
          <h4>Tour</h4>
          <form>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                value={currentTour.title}
                onChange={this.onChangeTitle}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                value={currentTour.description}
                onChange={this.onChangeDescription}
              />
            </div>

            <div className="form-group">
              <label htmlFor="price">Price</label>
              <input
                type="text"
                className="form-control"
                id="price"
                value={currentTour.price}
                onChange={this.onChangePrice}
              />
            </div>
          </form>

          <button
            className="badge badge-danger mr-2"
            onClick={this.removeTour}
          >
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={this.updateContent}
          >
            Update
          </button>
          <p>{this.state.message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Tour...</p>
        </div>
      )}
    </div> 

    );
  }
}

export default connect(null, { updateTour, deleteTour })(Tour);