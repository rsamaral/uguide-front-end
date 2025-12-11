import http from '../http-common';

class TourDataService {
  // Get all tours (optionally with ?title= in query)
  getAll() {
    return http.get('/tour');
  }

  // Get tours by guide
  findByGuide(guide) {
    return http.get(`/tour/guide/${guide}`);
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

  // Find tours by title (uses backend filter on ?title=)
  findByTitle(title) {
    return http.get(`/tour?title=${encodeURIComponent(title)}`);
  }

  // Find a tour by id
  findById(id) {
    return http.get(`/tour/id/${id}`);
  }

  //   GET /api/tour/tourist/:tourist
  findByTourist(tourist) {
    return http.get(`/tour/tourist/${tourist}`);
  }
}

export default new TourDataService();
