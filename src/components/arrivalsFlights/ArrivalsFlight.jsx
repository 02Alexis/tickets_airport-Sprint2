import React from "react";
import { StyleArrivals, StyleBottonArrivals } from "./StylesArrivalsFlight";
import { StyledContainer, StyledDate } from "../departureFlight/StylesDeparture";
import CardDateArrivals from "./CardDateArrivals";

const ArrivalsFlight = () => {
  return (
    <div>
      <StyledDate>
        <StyledContainer>
        <h1>Vuelo de Regreso</h1>
        <StyleBottonArrivals>Cambiar vuelo</StyleBottonArrivals>
        </StyledContainer>
        <h2>Lunes 11 sept 2023</h2>
        <h4>San Andres, Colombia(ADZ)</h4>
        <p>Selección de horarios y equipaje</p>
      </StyledDate>
      <StyleArrivals>
      <CardDateArrivals/>

      </StyleArrivals>
    </div>
  );
};

export default ArrivalsFlight;
