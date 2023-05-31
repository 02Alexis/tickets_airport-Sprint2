import axios from "axios";

const API_FAKE = "https://minibackend-aerolinea-app-production.up.railway.app/";
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

export const getCitiesData = async (initialorDon) => {
    try {

        const { data } = await axios.get(`${API_FAKE}${endpointFlights}/${initialorDon}`);

        const vuelos = data.flights.find((item) => item.id === initialorDon);
        console.log("link Start",initialorDon);
        
        const infoViaje = {
            cityOrigen: vuelos.initialor
        };
        return infoViaje;

    } catch (error) {
        console.log(error);
        return {};
    }
}