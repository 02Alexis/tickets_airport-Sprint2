import axios from 'axios';

const API_BASE_URL = 'http://localhost:4000/compra';

export const instanceAxios = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

console.log(API_BASE_URL);


// Resto del código...

// export const instanceAxios = axios.create({
//   baseURL: API_BASE_URL,
//   headers: {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json',
//   },
// });

