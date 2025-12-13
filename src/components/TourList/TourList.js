import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { findTourByTitle, updateTour } from '../../actions/uguide-actions/tour';
import { useHistory } from 'react-router-dom';
import {
  SearchUL,
  MainContainer,
  Header,
  SearchListContainer,
  SearchListInput,
  SearchListBtn,
  SearchToursTitle,
  Tours,
  SearchList,
  ShowTours,
  TourInfo,
  BookBtn,
} from './styles';

const TourList = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const tours = useSelector((state) => state.tours);
  const currentUser = useSelector((state) => state.auth.user);

  const [currentTour, setCurrentTour] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState('');

  const onChangeSearchTitle = (e) => {
    setSearchTitle(e.target.value);
  };

  const refreshData = () => {
    setCurrentTour(null);
    setCurrentIndex(-1);
  };

  const setActiveTour = (tour, index) => {
    setCurrentTour(tour);
    setCurrentIndex(index);
  };

  const findByTitle = () => {
    refreshData();
    dispatch(findTourByTitle(searchTitle));
  };

  const onBookClick = () => {
    if (!currentTour || !currentUser) return;

    const updatedTour = {
      ...currentTour,
      tourist: currentUser.id, // assuming user.id is correct
    };

    dispatch(updateTour(currentTour.id, updatedTour))
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });

    history.push('/confirmation');
    window.location.reload();
  };

  return (
    <MainContainer>
      <Header>Find Your Tour</Header>

      <SearchListContainer>
        <SearchListInput
          type='text'
          className='form-control'
          placeholder='Search by title'
          value={searchTitle}
          onChange={onChangeSearchTitle}
        />

        <SearchListBtn type='button' onClick={findByTitle}>
          Search
        </SearchListBtn>
      </SearchListContainer>

      {tours.length > 0 && (
        <SearchToursTitle>Look what we found for you!</SearchToursTitle>
      )}

      <ShowTours>
        <Tours>
          {tours.length > 0 &&
            tours.map((tour, index) => (
              <SearchUL key={tour.id ?? index}>
                <SearchList
                  style={{
                    background: index === currentIndex ? '#E5E5E5' : '',
                  }}
                  onClick={() => setActiveTour(tour, index)}
                >
                  {tour.title}
                </SearchList>
              </SearchUL>
            ))}
        </Tours>

        {currentTour && (
          <TourInfo>
            <div>
              <label>
                <strong>Title:</strong>
              </label>{' '}
              {currentTour.title}
            </div>
            <div>
              <label>
                <strong>Description:</strong>
              </label>{' '}
              {currentTour.description}
            </div>
            <div>
              <label>
                <strong>Price:</strong>
              </label>{' '}
              {currentTour.price}
            </div>
            <div>
              <label>
                <strong>Date:</strong>
              </label>{' '}
              {currentTour.data}
            </div>
            <div>
              <label>
                <strong>Time:</strong>
              </label>{' '}
              {currentTour.time}
            </div>
            <div>
              <label>
                <strong>City:</strong>
              </label>{' '}
              {currentTour.city}
            </div>
            <BookBtn onClick={onBookClick}>Book Now</BookBtn>
          </TourInfo>
        )}
      </ShowTours>
    </MainContainer>
  );
};

export default TourList;
