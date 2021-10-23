import axios from "axios";

class ApiService {
  constructor() {
    this.http = axios;
    this.http.defaults.baseURL = 'http://localhost:3001/';
    
  }
  get(url, headers) {
    return this.http.get(url, headers);

  }
  getWithParams(url){
    return this.http.get(url)
  }
  post(url, body) {
    return this.http.post(url, body);
  }
  put(url, body) {
    return this.http.put(url, body);
  }
  putWithToken(url, body, headers ){
    return this.http.put(url,  body,headers);
  }
  delete(url, body){
    return this.http.delete(url, body);
  }
  getWithBody(url, body){
    return this.http.get(url, body);
  }
}

export default new ApiService();
