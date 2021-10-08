import http from "../http-common";

class TourDataService {
  getAll(){
    return http.get("/tour");
  }

  get(id){
    return http.get(`/tour/${id}`);
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
}

export default new TourDataService();