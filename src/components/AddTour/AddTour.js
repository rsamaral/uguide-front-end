import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createTour } from '../../actions/uguide-actions/tour';
import {
  MainContainer,
  Header,
  FormAddInput,
  FormAddContent,
  FormAddBtn,
  FormAddDesc,
} from './styles';

const AddTour = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.user);

  const [tour, setTour] = useState({
    id: null,
    title: '',
    description: '',
    date: '',
    city: '',
    time: '',
    price: '',
    guide: '',
    tourist: null,
  });

  const [submitted, setSubmitted] = useState(false);

  const onChangeTitle = (e) => {
    setTour((prev) => ({ ...prev, title: e.target.value }));
  };

  const onChangeDescription = (e) => {
    setTour((prev) => ({ ...prev, description: e.target.value }));
  };

  const onChangePrice = (e) => {
    setTour((prev) => ({ ...prev, price: e.target.value }));
  };

  const onChangeCity = (e) => {
    setTour((prev) => ({ ...prev, city: e.target.value }));
  };

  const onChangeTime = (e) => {
    setTour((prev) => ({ ...prev, time: e.target.value }));
  };

  const onChangeDate = (e) => {
    setTour((prev) => ({ ...prev, date: e.target.value }));
  };

  const saveTour = () => {
    const { title, description, price, date, time, city, tourist } = tour;
    const guide = currentUser?.id;

    dispatch(
      createTour(title, description, price, guide, date, time, city, tourist)
    )
      .then((data) => {
        setTour({
          id: data.id,
          title: data.title,
          description: data.description,
          price: data.price,
          guide: data.guide,
          date: data.date,
          city: data.city,
          time: data.time,
          tourist: data.tourist,
        });
        setSubmitted(true);
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const newTour = () => {
    setTour({
      id: null,
      title: '',
      description: '',
      date: '',
      city: '',
      time: '',
      price: '',
      guide: '',
      tourist: null,
    });
    setSubmitted(false);
  };

  return (
    <MainContainer>
      <Header>Add a New Tour</Header>

      <FormAddContent>
        {submitted ? (
          <div>
            <h4>Your tour package has been successfully added!</h4>
          </div>
        ) : (
          <div>
            <FormAddInput
              type='text'
              placeholder='Tour Title'
              id='title'
              required
              value={tour.title}
              onChange={onChangeTitle}
              name='title'
            />

            <FormAddDesc
              type='text'
              placeholder='Description'
              id='description'
              required
              value={tour.description}
              onChange={onChangeDescription}
              name='description'
            />

            <FormAddInput
              type='text'
              placeholder='Price'
              id='price'
              required
              value={tour.price}
              onChange={onChangePrice}
              name='price'
            />

            <FormAddInput
              type='text'
              placeholder='Date'
              id='date'
              required
              value={tour.date}
              onChange={onChangeDate}
              name='date'
            />

            <FormAddInput
              type='text'
              placeholder='City'
              id='city'
              required
              value={tour.city}
              onChange={onChangeCity}
              name='city'
            />

            <FormAddInput
              type='text'
              placeholder='Time'
              id='time'
              required
              value={tour.time}
              onChange={onChangeTime}
              name='time'
            />

            <FormAddBtn onClick={saveTour}>Add Tour</FormAddBtn>
          </div>
        )}
      </FormAddContent>
    </MainContainer>
  );
};

export default AddTour;
