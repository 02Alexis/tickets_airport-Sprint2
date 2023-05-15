import React from "react";
import { Contenedor, StyleContainer, StyleExit, StyleExit2, StyleFlex, Styletext } from "./StyleReservationFligth";
import Down from '../../img/line.png'

const ReservationFligth = () => {
  return (
   <>
   <Contenedor>
    <h1>Tu reservacion</h1>
    <StyleContainer>
      <StyleFlex>
        <h3>Pasajeros</h3>
        <h3>1 Adulto</h3>
      </StyleFlex>    
    <p>Vuelo de salida</p>
    <StyleExit>
      <h1>MEX</h1>
      <img src={ Down } alt="underscore"/>
      <h1>CUL</h1>
    </StyleExit>
    <StyleExit2>
      <p>05:45 PM</p>
      <p></p>
      <p>06:47 PM</p>
    </StyleExit2>
    <Styletext>Martes, 30 noviembre, 2021</Styletext>
    </StyleContainer>
   </Contenedor>
   </>
  );
};

export default ReservationFligth;
