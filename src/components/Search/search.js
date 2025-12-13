import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  SearchInput,
  SearchBtn,
  SearchContainer,
  HeaderSearch,
  MainContainer,
} from './styles';

const Search = () => {
  const history = useHistory();
  const [searchTitle, setSearchTitle] = useState('');

  const handleSearchChange = (e) => {
    setSearchTitle(e.target.value);
  };

  const findByTitle = () => {
    history.push({
      pathname: '/list',
      state: { searchTitle },
    });
  };

  return (
    <MainContainer>
      <HeaderSearch>Where are you located?</HeaderSearch>

      <SearchContainer>
        <SearchInput
          type='text'
          placeholder='Type your location here'
          value={searchTitle}
          onChange={handleSearchChange}
        />

        <SearchBtn type='button' onClick={findByTitle}>
          Search
        </SearchBtn>
      </SearchContainer>
    </MainContainer>
  );
};

export default Search;
