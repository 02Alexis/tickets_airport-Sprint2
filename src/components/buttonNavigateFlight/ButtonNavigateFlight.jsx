import React from "react";
// import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// Estilos para el botón
//'Button': Define el estilo del botón. Utiliza 'display' para mostrar u ocultar el botón según el valor de la propiedad 'show'.
const Button = styled.button`
  /* display: ${({ show }) => (show ? "block" : "none")}; */
  border-radius: 50px;
  border: 1px solid #9e1071;
  background-color: var(--purple);
  padding: 15px 16px;
  font-size: 16px;
  font-weight: bold;
  width: 350px;
  color: var(--White);
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 95%;
  right: 6%;
    cursor: pointer;

  &:hover {
    background-color: var(--White);
    color: var(--purple);
  }

  /* Estilos para pantallas con un ancho máximo de 375px */

  @media (max-width: 1200px) {
    position: relative;
    top: 278px;
    width: 321px;
    left: -11px;
    z-index: 2;
  }
  @media (max-width: 659px) {
    left: -4px;
    position: relative;
    top: 393px;
    width: 332px;
    z-index: 2;
  }

  @media (max-width: 375px) {
    position: relative;
    top: 451px;
    width: 100%;
    z-index: 2;
    left: -2px;
}
  
`;

//Recibe una propiedad show.
// El botón se muestra u oculta según el valor de show.
const ButtonNavigateFlight = ({ show, handleButtonNavigateSelection }) => {
  // const navigate = useNavigate();

  // const handleButton = () => {
  //   console.log("entre");
  //   navigate("/flightDetail/seatSelection");
  //   showSeatSelection(true);
  // };

  return (
    <>
      <Button show={show} type="button" onClick={() => handleButtonNavigateSelection()}>
        Seleccionar asientos
      </Button>
    </>
  );
};

export default ButtonNavigateFlight;
