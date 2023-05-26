import React, { useContext } from "react";
import { Contenedor, StyleContainer, StyleExit, StyleExit2, StyleFlex, Styletext } from "./StyleReservationFligth";
import { ContenedorCost, StyleContainerCost, ContainerCost, ColumnCost } from "./StyleFlightCost";
import Down from '../../img/line.png'
import { searchParamsContext } from "../../Routes/AppRouter";

const ReservationFligth = () => {

  const {
    filters,
  } = useContext(searchParamsContext);

  return (
   <>
   <Contenedor>
    <h1>Tu reservación</h1>
    <StyleContainer>
      <StyleFlex>
        <h3>Pasajeros</h3>
        <h3>1 Adulto</h3>
      </StyleFlex>    
    <p>Vuelo de salida</p>
    <StyleExit>
      <h1>{filters.date}</h1>
      <img src={ Down } alt="underscore"/>
      <h1>CUL</h1>
    </StyleExit>
    <StyleExit2>
      <p>05:47 PM</p>
      <p></p>
      <p>06:47 PM</p>
    </StyleExit2>
    <Styletext>Martes, 30 noviembre, 2021</Styletext>
    </StyleContainer>
   </Contenedor>

   <ContenedorCost>
     <h1>Costos de vuelo</h1>
     <StyleContainerCost>
      <ContainerCost>
        <div>
          <p>Tarida base</p>
          <p>Descuento Promocional</p>
          <p>Tarifa base con descuento</p>
          <p>IVA Tarifa</p>
          <h3>Total</h3>
        </div>
        <ColumnCost>
          <p>$1,505 MXN</p>
          <p>$1,034 MXN</p>
          <p>$471 MXN</p>
          <p>$75 MXN</p>
          <h3>$75 MXN</h3>
        </ColumnCost>
      </ContainerCost>
     </StyleContainerCost>
    </ContenedorCost>
   </>
  );
};

export default ReservationFligth;
