import { instanceAxios } from "./Api";

// // Función que realiza una petición GET a la API
// export const get = async (endpoint) => {
//     const response = await instanceAxios.get(endpoint);
//     return response.data;
//   };
  
//   // Función que realiza una petición POST a la API

//   // Función que realiza una petición PUT a la API
//   export const put = async (endpoint, data) => {
//     const response = await instanceAxios.put(endpoint, data);
//     return response.data;
//   };
  
//   // Función que realiza una petición DELETE a la API /delete/id
//   export const deletes = async (endpoint) => {
//     const response = await instanceAxios.delete(endpoint);
//     return response.data;

//   };  
  export const post = async (endpoint, data) => {
    const response = await instanceAxios.post(endpoint, data);
    return response.data;
  };
  

// import axios from 'axios';

// export const post = async (url, data) => {
//   try {
//     await axios.post(`http://localhost:4000${url}`, data);
//   } catch (error) {
//     console.error(error);
//   }
// };
