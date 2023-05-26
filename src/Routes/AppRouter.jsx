import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../components/app/App";
import FlightDetail from "../pages/FlightDetail";
import NotFoundPage from "../pages/NotFoundPage";
import SeatSelection from "../pages/SeatSelection";

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

  const [filters, setFilters] = useState({});

  

  // const getParamsFronStorage = () => {
  //   const params = sessionStorage.getItem("searchParams")? JSON.parse(sessionStorage.getItem("searchParams")) : {};

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
        }}
      >
        <Routes>
          <Route path="/">
            <Route index element={<App />} />
            <Route path="flightDetail" element={<FlightDetail />}>
              <Route path="seatSelection" element={<SeatSelection />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </searchParamsContext.Provider>
    </BrowserRouter>
  );
};

export default AppRouter;
