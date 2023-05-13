import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../components/app/App";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<App/>}>
            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
