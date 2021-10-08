import {
  CREATE_TOUR,
  RETRIEVE_TOUR,
  UPDATE_TOUR,
  DELETE_TOUR,
  DELETE_ALL_TOURS
} from "./types"

import TourDataService from "../services/tour.service"

export const createTour = (title, description, price) => async (dispatch) => {
  try {
    const res = await TourDataService.create({ title, description, price });

    dispatch({
      type: CREATE_TOUR,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const retrieveTour = () => async (dispatch) => {
  try {
    const res = await TourDataService.getAll();

    dispatch({
      type: RETRIEVE_TOUR,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateTour = (id, data) => async (dispatch) => {
  try {
    const res = await TourDataService.update(id, data);

    dispatch({
      type: UPDATE_TOUR,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteTour = (id) => async (dispatch) => {
  try {
    await TourDataService.delete(id);

    dispatch({
      type: DELETE_TOUR,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteAllTour = () => async (dispatch) => {
  try {
    const res = await TourDataService.deleteAll();

    dispatch({
      type: DELETE_ALL_TOURS,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const findTourByTitle = (title) => async (dispatch) => {
  try {
    const res = await TourDataService.findByTitle(title);

    dispatch({
      type: RETRIEVE_TOUR,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
}