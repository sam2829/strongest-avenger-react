import axios from "axios";

axios.defaults.baseURL =
  "https://strongest-avenger-drf-api-c57eb1c3e676.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();
