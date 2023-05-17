import React from "react";
import { Contenedor, StyleContainer, Container, Column } from "./StyleFlightCost";
import { useNavigate } from "react-router-dom";

const FlightCost = ({ showSeatSelection }) => {

  const navigate = useNavigate();

    const handleButton = () => {
        console.log("entre");
        navigate('/flightDetail/seatSelection')
        showSeatSelection(true)
    }

  return (
    <>
    <Contenedor>
     <h1>Costos de vuelo</h1>
     <StyleContainer>
      <Container>
        <div>
          <p>Tarida base</p>
          <p>Descuento Promocional</p>
          <p>Tarifa base con descuento</p>
          <p>IVA Tarifa</p>
          <h3>Total</h3>
        </div>
        <Column>
          <p>$1,505 MXN</p>
          <p>$1,034 MXN</p>
          <p>$471 MXN</p>
          <p>$75 MXN</p>
          <h3>$75 MXN</h3>
        </Column>
      </Container>
     </StyleContainer>
     <button type='button' onClick={() => handleButton()}>ir a otra pagina</button>
    </Contenedor>

    
    </>
  );
};

export default FlightCost;
