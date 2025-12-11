import React, { useState } from 'react';
import {
  SearchInput,
  SearchBtn,
  SearchContainer,
  HeaderSearch,
  MainContainer,
} from './styles';
import { history } from '../../helpers/history';

const Search = () => {
  const [searchTitle, setSearchTitle] = useState('');

  const handleSearchChange = (e) => {
    setSearchTitle(e.target.value);
  };

  const findByTitle = () => {
    history.push({
      pathname: '/list',
      state: { searchTitle },
    });
    window.location.reload();
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
