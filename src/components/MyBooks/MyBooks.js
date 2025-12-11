import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { findByTourist, updateTour } from '../../actions/uguide-actions/tour';

import {
  Header,
  MainContainer,
  PackagesContainer,
  PackageList,
  PackageListItem,
  ItemTitle,
  DeleteBtn,
  PackageFooter,
} from './styles';

const MyBookings = () => {
  const dispatch = useDispatch();

  const tours = useSelector((state) => state.tours);
  const currentUser = useSelector((state) => state.auth.user);

  const [message, setMessage] = useState('');

  useEffect(() => {
    if (currentUser?.id) {
      dispatch(findByTourist(currentUser.id));
    }
  }, [dispatch, currentUser]);

  const handleCancelBooking = (tour) => {
    const updatedTour = {
      ...tour,
      tourist: null,
    };

    dispatch(updateTour(tour.id, updatedTour))
      .then((response) => {
        console.log(response);
        setMessage('Booking cancelled successfully!');
      })
      .catch((e) => {
        console.log(e);
        setMessage('Something went wrong while cancelling the booking.');
      });
  };

  const bookedTours = tours.filter((tour) => tour.tourist != null);

  return (
    <MainContainer>
      <Header>My Bookings</Header>

      <PackagesContainer>
        {bookedTours.length === 0 && (
          <h4>You don't have any bookings yet. Book one now!</h4>
        )}

        {bookedTours.map((tour) => (
          <PackageList key={tour.id}>
            <PackageListItem>
              <ItemTitle>Package:</ItemTitle>
              {tour.title}
            </PackageListItem>

            <PackageListItem>
              <ItemTitle>Description:</ItemTitle>
              {tour.description}
            </PackageListItem>

            <PackageListItem>
              <ItemTitle>Price:</ItemTitle>
              {tour.price}
            </PackageListItem>

            <PackageListItem>
              <ItemTitle>City:</ItemTitle>
              {tour.city}
            </PackageListItem>

            <PackageListItem>
              <ItemTitle>Date:</ItemTitle>
              {tour.data}
            </PackageListItem>

            <PackageListItem>
              <ItemTitle>Time:</ItemTitle>
              {tour.time}
            </PackageListItem>

            <PackageFooter>
              <DeleteBtn onClick={() => handleCancelBooking(tour)}>
                Cancel Booking
              </DeleteBtn>
            </PackageFooter>
          </PackageList>
        ))}

        {message && <p>{message}</p>}
      </PackagesContainer>
    </MainContainer>
  );
};

export default MyBookings;
