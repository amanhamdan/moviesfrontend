import axios from 'axios';
const API_URL = 'http://127.0.0.1:8080';

export const getAllMovies = () => {
    return axios.get(`${API_URL}/movie`);
  };
  
  export const createMovie = (movie) => {
    return axios.post(`${API_URL}/movie`, movie);
  };
  
  export const deleteMovie = (id) => {
    return axios.delete(`${API_URL}/movie/${id}`);
  };
