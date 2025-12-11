import http from '../http-common';

class TourDataService {
  // Get all tours (optionally with ?title= in query on backend)
  getAll() {
    return http.get('/tour');
  }

  // Get tours by guide id
  findByGuide(guideId) {
    return http.get(`/tour/guide/${guideId}`);
  }

  // Create a new tour
  create(data) {
    return http.post('/tour', data);
  }

  // Update a tour by id
  update(id, data) {
    return http.put(`/tour/id/${id}`, data);
  }

  // Delete a tour by id
  delete(id) {
    return http.delete(`/tour/id/${id}`);
  }

  // Delete all tours
  deleteAll() {
    return http.delete('/tour');
  }

  // Find tours by title
  findByTitle(title) {
    return http.get(`/tour`, {
      params: { title },
    });
  }

  // Find a tour by id
  findById(id) {
    return http.get(`/tour/id/${id}`);
  }

  // Get tours reserved by a specific tourist
  findByTourist(touristId) {
    return http.get(`/tour/tourist/${touristId}`);
  }
}

export default new TourDataService();
