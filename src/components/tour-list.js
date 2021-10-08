import React, { Component } from "react";
import { connect } from "react-redux";
import { retrieveTour, findTourByTitle, deleteAllTour } from "../actions/tour";
import { Link } from "react-router-dom"

class TourList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.refreshData = this.refreshData.bind(this);
    this.setActiveTour = this.setActiveTour.bind(this);
    this.findByTitle = this.findByTitle.bind(this);
    this.removeAllTour = this.removeAllTour.bind(this);

    this.state = {
      currentTour: null,
      currentIndex: -1,
      searchTitle: "",
    };
  }

  componentDidMount() {
    this.props.retrieveTour();
  }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle,
    });
  }

  refreshData() {
    this.setState({
      currentTour: null,
      currentIndex: -1,
    });
  }

  setActiveTour(tour, index) {
    this.setState({
      currentTour: tour,
      currentIndex: index,
    });
  }

  removeAllTour() {
    this.props
      .deleteAllTour()
      .then((response) => {
        console.log(response);
        this.refreshData();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  findByTitle() {
    this.refreshData();

    this.props.findTourByTitle(this.state.searchTitle);
  }



  render() {
    const { searchTitle, currentTour, currentIndex } = this.state;
    const { tours } = this.props;

    return (
      <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Pesquise pelo título"
            value={searchTitle}
            onChange={this.onChangeSearchTitle}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={this.findByTitle}
            >
              Pesquisar

            </button>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <h4>Lista de Passeios</h4>

        <ul className="list-group">
          {tours &&
            tours.map((tour, index) => (
              <li
                className={
                  "list-group-item " +
                  (index === currentIndex ? "active" : "")
                }
                onClick={() => this.setActiveTour(tour, index)}
                key={index}
              >
                {tour.title}
              </li>
            ))}
        </ul>

        <button
          className="m-3 btn btn-sm btn-danger"
          onClick={this.removeAllTour}
        >
          Excluir Pacotes
        </button>
      </div>
      <div className="col-md-6">
        {currentTour ? (
          <div>
            <h4>Passeios</h4>
            <div>
              <label>
                <strong>Título:</strong>
              </label>{" "}
              {currentTour.title}
            </div>
            <div>
              <label>
                <strong>Descrição:</strong>
              </label>{" "}
              {currentTour.description}
            </div>
            <div>
              <label>
                <strong>Preço:</strong>
              </label>{" "}
              {currentTour.price}
            </div>

            <Link
              to={"/tour/" + currentTour.id}
              className="badge badge-warning"
            >
              Editar Passeio
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Escolha o passeio desejado.</p>
          </div>
        )}
      </div>
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tours: state.tours,
  };
};

export default connect(mapStateToProps, { retrieveTour, findTourByTitle, deleteAllTour })(TourList);