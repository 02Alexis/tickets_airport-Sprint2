import React from "react";
import { StyleBottonDeparture, StyleDeparture, StyledContainer, StyledDate } from "./StylesDeparture";
import CardDateBaggage from "./CardDateBaggage";

const DepartureFlight = () => {
  return (
    <div>
      <StyledDate>
        <StyledContainer>
        <h1>Vuelo de Salida</h1>
        <StyleBottonDeparture>Cambiar vuelo</StyleBottonDeparture>
        </StyledContainer>
        <h2>Jueves 20 jul 2023</h2>
        <h4>Medellín, Colombia(MDE)</h4>
        <p>Selección de horarios y equipaje</p>
      </StyledDate>
      
      <StyleDeparture>
        <CardDateBaggage/>
      </StyleDeparture>
    </div>
  );
};

export default DepartureFlight;
