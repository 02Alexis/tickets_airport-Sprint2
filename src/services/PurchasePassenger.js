import { instanceAxios } from "./Api";


  export const post = async (endpoint, data) => {
    const response = await instanceAxios.post(endpoint, data);
    return response.data;
  };
