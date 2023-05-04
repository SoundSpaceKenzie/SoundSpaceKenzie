import axios from 'axios';

const Api = axios.create({
  baseURL: 'https://soundspaceapi.onrender.com',
  timeout: 6000,
});

export default Api;
