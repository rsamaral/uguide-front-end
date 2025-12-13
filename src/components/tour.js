import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTour, deleteTour } from '../actions/uguide-actions/tour';
import TourDataService from '../services/tour.service';
import { useLocation } from 'react-router-dom';
import AddTour from './AddTour/AddTour';

const Tour = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const tour = location.state?.tour;
  console.log('tour', tour);

  const [currentTour, setCurrentTour] = useState({
    id: '',
    title: '',
    description: '',
    data: '',
    price: '',
    city: '',
    time: '',
    guide: '',
    tourist: '',
  });

  const [message, setMessage] = useState('');

  const getTour = (tourId) => {
    TourDataService.findById(tourId)
      .then((response) => {
        setCurrentTour(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (tour.id) {
      getTour(tour.id);
    }
  }, [tour.id]);

  const onChangeTitle = (e) => {
    const title = e.target.value;
    setCurrentTour((prev) => ({
      ...prev,
      title,
    }));
  };

  const onChangeDescription = (e) => {
    const description = e.target.value;
    setCurrentTour((prev) => ({
      ...prev,
      description,
    }));
  };

  const onChangePrice = (e) => {
    const price = e.target.value;
    setCurrentTour((prev) => ({
      ...prev,
      price,
    }));
  };

  const handleUpdate = () => {
    dispatch(updateTour(currentTour.id, currentTour))
      .then((response) => {
        console.log(response);
        setMessage('The tour was updated successfully!');
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleDeleteTour = () => {
    if (!currentTour.id) return;

    dispatch(deleteTour(currentTour.id))
      .then((response) => {
        console.log(response);
        setMessage('The tour was deleted successfully!');
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // return (
  //   <div>
  //     {currentTour ? (
  //       <div className='edit-form'>
  //         <h4>Tour</h4>
  //         <form>
  //           <div className='form-group'>
  //             <label htmlFor='title'>Title</label>
  //             <input
  //               type='text'
  //               className='form-control'
  //               id='title'
  //               value={currentTour.title}
  //               onChange={onChangeTitle}
  //             />
  //           </div>

  //           <div className='form-group'>
  //             <label htmlFor='description'>Description</label>
  //             <input
  //               type='text'
  //               className='form-control'
  //               id='description'
  //               value={currentTour.description}
  //               onChange={onChangeDescription}
  //             />
  //           </div>

  //           <div className='form-group'>
  //             <label htmlFor='price'>Price</label>
  //             <input
  //               type='text'
  //               className='form-control'
  //               id='price'
  //               value={currentTour.price}
  //               onChange={onChangePrice}
  //             />
  //           </div>
  //         </form>

  //         <button
  //           className='badge badge-danger mr-2'
  //           onClick={handleDeleteTour}
  //         >
  //           Delete tour
  //         </button>

  //         <button
  //           type='button'
  //           className='badge badge-success'
  //           onClick={handleUpdate}
  //         >
  //           Update
  //         </button>

  //         <p>{message}</p>
  //       </div>
  //     ) : (
  //       <div>
  //         <br />
  //         <p>Click on the desired tour.</p>
  //       </div>
  //     )}
  //   </div>
  // );

  return <AddTour editTour={tour} />;
};

export default Tour;
