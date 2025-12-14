import { useLocation } from 'react-router-dom';
import AddTour from './AddTour/AddTour';

const Tour = () => {
  const location = useLocation();
  const tour = location.state?.tour;

  return <AddTour editTour={tour} />;
};

export default Tour;
