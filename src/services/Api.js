import axios from 'axios';

const API_BASE_URL = 'https://minibackend-aerolinea-app-production.up.railway.app';

export const instanceAxios = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

console.log(API_BASE_URL);

