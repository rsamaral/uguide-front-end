import http from "../http-common";

class TourDataService {
  getAll(){
    return http.get("/tour");
  }

  get(guide){
    return http.get(`/tour/${guide}`);
  }

  create(data){
    return http.post("/tour", data);
  }

  update(id, data){
    return http.put(`/tour/${id}`, data);
  }

  delete(id){
    return http.delete(`/tour/${id}`);
  }

  deleteAll(){
    return http.delete("/tour");
  }

  findByTitle(title){
    return http.get(`/tour?title=${title}`)
  }

  findById(id){
    return http.get(`/tour/${id}`)
  }

  findByTourist(tourist){
    return http.get(`/tour/${tourist}`)
  }
}

export default new TourDataService();