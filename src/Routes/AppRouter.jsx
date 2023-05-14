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
        <Route path="/prueba" element={<Prueba />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
