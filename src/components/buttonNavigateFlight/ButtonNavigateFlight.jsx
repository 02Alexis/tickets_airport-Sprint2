import React from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

// Estilos para el botón
//'Button': Define el estilo del botón. Utiliza 'display' para mostrar u ocultar el botón según el valor de la propiedad 'show'.
const Button = styled.button`
  display: ${({ show }) => (show ? 'block' : 'none')};
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

  position: fixed;
  top: 65%;
  right: 6%;

  &:hover {
    background-color: var(--White);
    cursor: pointer;
    color: var(--purple);
    }
`;

//Recibe una propiedad show.
// El botón se muestra u oculta según el valor de show.
const ButtonNavigateFlight = ({ showSeatSelection, show  }) => {

  const navigate = useNavigate();

    const handleButton = () => {
        console.log("entre");
        navigate('/flightDetail/seatSelection')
        showSeatSelection(true)
    }

  return (
    <>
     <Button show={show} type='button' onClick={() => handleButton()}>Seleccionar asientos</Button>    
    </>
  );
};

export default ButtonNavigateFlight;
