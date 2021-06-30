import axios from "axios";

/** base url to make req to the moive database */

const service = axios.create({
  baseURL: "http://18.207.249.121:8080//",
});

export default service;

//http://35.168.1.82:8080/
//http://192.168.43.4:8000/
