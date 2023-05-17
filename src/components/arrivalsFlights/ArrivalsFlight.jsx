import React from "react";
import { StyleArrivals, StyleBottonArrivals, StyledContainerArrival, StyledDateArrival } from "./StylesArrivalsFlight";
import CardDateArrivals from "./CardDateArrivals";

const ArrivalsFlight = () => {
  return (
    <div>
      <StyledDateArrival>
        <StyledContainerArrival>
        <h1>Vuelo de Regreso</h1>
        <StyleBottonArrivals>Cambiar vuelo</StyleBottonArrivals>
        </StyledContainerArrival>
        <h2>Lunes 11 sept 2023</h2>
        <h4>San Andres, Colombia(ADZ)</h4>
        <p>Selección de horarios y equipaje</p>
      </StyledDateArrival>
      <StyleArrivals>
      <CardDateArrivals/>

      </StyleArrivals>
    </div>
  );
};

export default ArrivalsFlight;
