import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../components/app/App";
import FlightDetail from "../pages/FlightDetail";
import NotFoundPage from "../pages/NotFoundPage";
import SeatSelection from "../pages/SeatSelection";
import PurchasePage from "../pages/PurchasePage";

export const searchParamsContext = createContext({});

const AppRouter = () => {
  const [selectedCity, setSelectedCity] = useState(""); // Estado para almacenar la ciudad seleccionada. Inicialmente está vacío.
  const [selectedCityDon, setSelectedCityDon] = useState(""); // Estado para almacenar la ciudad seleccionada. Inicialmente está vacío.
  const [dateDre, setDateDre] = useState("");
  const [date, setDate] = useState("");
  const [passengers, setPassengers] = useState({
    adults: 0,
    children: 0,
    babies: 0,
  });

  // estados de la pagina detalles de vuelo
  const [departureTime1, setDepartureTime1] = useState("");
  const [arrivalTime1, setArrivalTime1] = useState("");
  const [selectedPrice1, setSelectedPrice1] = useState("");
  const [departureTime2, setDepartureTime2] = useState("");
  const [arrivalTime2, setArrivalTime2] = useState("");
  const [selectedPrice2, setSelectedPrice2] = useState("");
  const [totalPrice, setTotalPrice] = useState("");

  const [filters, setFilters] = useState({});

  // const getParamsFronStorage = () => {
  //   const params = sessionStorage.getItem("searchParams")? JSON.parse(sessionStorage.getItem("searchParams")) : {};
  // gggggtrgfgfj
  //commit

  //   setFilters({...params})
  // }
  return (
    <BrowserRouter>
      <searchParamsContext.Provider
        value={{
          selectedCity,
          setSelectedCity,
          selectedCityDon,
          setSelectedCityDon,
          dateDre,
          setDateDre,
          date,
          setDate,
          passengers,
          setPassengers,
          filters,
          setFilters,

          departureTime1,
          setDepartureTime1,
          arrivalTime1,
          setArrivalTime1,
          selectedPrice1,
          setSelectedPrice1,
          departureTime2,
          setDepartureTime2,
          arrivalTime2,
          setArrivalTime2,
          selectedPrice2,
          setSelectedPrice2,
          totalPrice,
          setTotalPrice,
        }}
      >
        <Routes>
          <Route path="/">
            <Route index element={<App />} />
            <Route path="flightDetail" element={<FlightDetail />}>
              <Route path="seatSelection" element={<SeatSelection />} />
            </Route>
          </Route>
          <Route path="purchasePage" element={<PurchasePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </searchParamsContext.Provider>
    </BrowserRouter>
  );
};

export default AppRouter;
