import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../components/app/App";
import FlightDetail from "../pages/FlightDetail";
import NotFoundPage from "../pages/NotFoundPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="/flightDetail" element={<FlightDetail />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
