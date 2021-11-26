import {
  CREATE_TOUR,
  RETRIEVE_TOUR,
  UPDATE_TOUR,
  DELETE_TOUR,
  DELETE_ALL_TOURS
} from "../actions/uguide-actions/types"

const initialState = [];

function tourReducer(tours = initialState, action){
  const { type, payload } = action;

  switch (type){
    case CREATE_TOUR:
      return [...tours, payload];

    case RETRIEVE_TOUR:
      return payload;

    case UPDATE_TOUR:
      return tours.map((tour) => {
        if (tour.id === payload.id) {
          return {
            ...tour,
            ...payload,
          };
        } else {
          return tour;
        }
      });

    case DELETE_TOUR:
      return tours.filter(({ id }) => id !== payload.id);  
    
    case DELETE_ALL_TOURS:
      return [];  

    default:
      return tours;  
  }
};

export default tourReducer;