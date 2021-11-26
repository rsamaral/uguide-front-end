import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { retrieveTour, findTourByTitle } from "../../actions/uguide-actions/tour";
import { SearchInput, SearchBtn, SearchContainer, HeaderSearch, MainContainer } from "./styles";
import { history } from "../../helpers/history";

class Search extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.findByTitle = this.findByTitle.bind(this);

    this.state = {
      searchTitle: "",
    };
  }


  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle,
    });
  }

  findByTitle() {
    history.push({
      pathname: '/List',
      state: { searchTitle: this.state.searchTitle }
    })
    window.location.reload()
  }


  render() {
    const { searchTitle } = this.state;

    return (
      <MainContainer>
        <HeaderSearch>
          Onde você está?
        </HeaderSearch>
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="Digite aqui o seu local"
            value={searchTitle}
            onChange={this.onChangeSearchTitle}
          />
          <SearchBtn
              type="button"
              onClick={this.findByTitle}
          >
            Pesquisar
          </SearchBtn>
        </SearchContainer>  
      </MainContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tours: state.tours,
  };
};

export default connect(mapStateToProps, { retrieveTour, findTourByTitle })(Search);