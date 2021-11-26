import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { retrieveTour, findTourByTitle, deleteAllTour } from "../../actions/uguide-actions/tour";
import { Link } from "react-router-dom";
import Modal from "../../components/Modal/modal";
import {SearchUL, MainContainer, Header, SearchListContainer, SearchListInput, SearchListBtn, SearchPasseiosTitle, Passeios, SearchList} from "./styles"

export const TourList = (props) => {
    const [currentTour, setCurrentTour] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [searchTitle, setSearchTitle] = useState("");

  const onChangeSearchTitle = (e) => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  }

  const refreshData = () => {
    setCurrentTour(null);
    setCurrentIndex(-1);
  }

  const setActiveTour = (tour, index) => {
    setCurrentTour(tour);
    setCurrentIndex(index);
  }

  // const removeAllTour = () => {
  //   this.props
  //     .deleteAllTour()
  //     .then((response) => {
  //       console.log(response);
  //       this.refreshData();
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // }

  const findByTitle = () => {
    refreshData();

    props.findTourByTitle(searchTitle);
  }

  const {tours} = props

    return (
      <MainContainer>
        <Header>
          Encontre o seu Passeio
        </Header>
        <SearchListContainer>
          <SearchListInput
            type="text"
            className="form-control"
            placeholder="Pesquise pelo título"
            value={searchTitle}
            onChange={onChangeSearchTitle}
          />
            <SearchListBtn
              type="button"
              onClick={findByTitle}
            >
              Pesquisar
            </SearchListBtn>
        </SearchListContainer>
          {tours.length > 0 &&
            tours.map((tour, index) => (
              <Passeios>
                <SearchPasseiosTitle>
                  Lista de Passeios
                </SearchPasseiosTitle>
                <SearchUL>
                  <SearchList
                    className={
                      "list-group-item " +
                      (index === currentIndex ? "active" : "")
                    }
                    onClick={() => setActiveTour(tour, index)}
                    key={index}
                  >
                    {tour.title}
                </SearchList>
              </SearchUL>  
              </Passeios>
            ))
          }
        {/* <SearchListBtn
          className="m-3 btn btn-sm btn-danger"
          onClick={this.removeAllTour}
        >
          Excluir Pacotes
        </SearchListBtn> */}
        {currentTour && (
          <Passeios>
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

            {/* <Link
              to={"/tour/" + currentTour.id}
              className="badge badge-warning"
            >
              Editar Passeio
            </Link> */}
          </Passeios>
        )}
    </MainContainer>
    );
  }

  const mapStateToProps = (state) => {
    return {
      tours: state.tours,
    };
  };
  
  export default connect(mapStateToProps, { retrieveTour, findTourByTitle, deleteAllTour })(TourList);