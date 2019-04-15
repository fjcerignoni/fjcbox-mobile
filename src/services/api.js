import axios from 'axios';

const api = axios.create({
  baseURL: "https://fjcbox-backend.herokuapp.com"
});

export default api;