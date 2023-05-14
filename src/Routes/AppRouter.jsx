import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../components/app/App";
import Prueba from "../pages/Prueba";
import NotFoundPage from "../pages/NotFoundPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route patch="/prueba" element={<Prueba />} />
        <Route patch="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
