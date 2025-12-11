import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { findByGuide, deleteTour } from '../../actions/uguide-actions/tour';

import {
  Header,
  MainContainer,
  PackagesContainer,
  PackageList,
  PackageListItem,
  ItemTitle,
  NavBtn,
  DeleteBtn,
  PackagesFooter,
} from './styles';

const MyPackages = () => {
  const dispatch = useDispatch();

  const tours = useSelector((state) => state.tours);
  const currentUser = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (currentUser?.id) {
      dispatch(findByGuide(currentUser.id));
    }
  }, [dispatch, currentUser]);

  const removeTour = (id) => {
    dispatch(deleteTour(id))
      .then(() => {
        console.log('Package deleted!');
      })
      .catch((e) => console.log(e));
  };

  return (
    <MainContainer>
      <Header>My Packages</Header>

      <PackagesContainer>
        {tours.length === 0 && (
          <h4>You don't have any packages yet. Create one now!</h4>
        )}

        {tours.map((tour) => (
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

            <PackagesFooter>
              <NavBtn>
                {/* If you later want to enable editing:
                <NavBtnLink to={`/tour/${tour.id}`}>Edit Tour</NavBtnLink>
                */}
                <DeleteBtn onClick={() => removeTour(tour.id)}>
                  Delete Package
                </DeleteBtn>
              </NavBtn>
            </PackagesFooter>
          </PackageList>
        ))}
      </PackagesContainer>
    </MainContainer>
  );
};

export default MyPackages;
