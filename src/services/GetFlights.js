import axios from "axios";

const API_FAKE = "http://localhost:4000/";
const endpointFlights = "flights";

export const GetFlights = async () => {
    try {

        const { data } = await axios.get(`${API_FAKE}${endpointFlights}`);
        return data;
        
    } catch (error) {
        console.log(error);
        return [];
    }
}

