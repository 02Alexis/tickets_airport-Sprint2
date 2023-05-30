import styled from "styled-components";

export const SeatDeparture = styled.div`
width: 450px;

    opacity: 0; /* Establecer la opacidad inicial en 0 */
  animation-name: fadeIn; /* Nombre de la animación */
  animation-duration: 0.5s; /* Duración de la animación en segundos */
  animation-timing-function: ease-in; /* Función de temporización de la animación */
  animation-fill-mode: forwards; /* Mantener el estado final de la animación */
  @keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(10px); /* Animación de desplazamiento hacia abajo */
  }
  100% {
    opacity: 1;
    transform: translateY(0); /* Animación de desplazamiento hacia arriba */
  }
}

  @media (max-width: 375px) {
    
  }
`;

export const SeatSelect = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
  margin-bottom: 7px;
`;

export const ReferenSeat = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
  margin-bottom: 7px;
`;

export const Subtittle = styled.div`
  margin-bottom: 10px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Column2 = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Aisle = styled.div`
  height: 50px;
  width: 50px;
  color: black;
  background-color: white;
  border-radius: 5px;
  margin-bottom: 10px;
  margin-right: 10px;
  padding: 20px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  height: 50px;
  width: 50px;
  background-color: #b9b9b9;
  border: none;
  border-radius: 5px;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    background-color: var(--purple);
    }
`;


//Estilos Fechas de vielo Departure

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  width: 800px;

  @media (max-width: 1200px) {
    position: relative;
    top: -34px;
  }

  /* @media (max-width: 609px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    top: 428px;
  } */

  @media (max-width: 375px) {
    position: relative;
    top: -34px;
    width:400px;
  }
`;

export const StyleBottonDeparture = styled.button`
  border-radius: 15px;
  border: 1px solid #9e1071;
  background-color: transparent;
  padding: 10px 16px;
  margin-top: 1rem;
  margin-left: auto;
  font-size: 16px;
  font-weight: bold;
  width: 180px;
  color: #9e1071;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #9e1071;
    cursor: pointer;
    color: white;
  }

  @media (max-width: 1200px) {
    display: flex;
    margin-bottom: 19px;
    margin-left: -234px;
    position: relative;
    top: 37px;
    z-index: 2;
  }

  @media (max-width: 375px) {
    display: flex;
    margin-bottom: 19px;
    position: relative;
    top: 36px;
    z-index: 2;
  }
`;

export const StyledDate = styled.div`
  margin-bottom: 1rem;

  h1 {
    margin-bottom: 1rem;
    font-weight: bold;
  }
  h2 {
    margin-bottom: 0.5rem;
  }
  h4 {
    color: rgb(150, 150, 150);
    margin-bottom: 2rem;
  }
  p {
    font-weight: bold;
    margin-bottom: 1rem;
  }

  /* @media (max-width: 1200px) {
    h2 {
      position: relative;
      top: 300px;
    }

    h4 {
      position: relative;
      top: 300px;
    }
    p {
      position: relative;
      top: 300px;
    }
  }
  @media (max-width: 768px) {
    h2 {
      position: relative;
      top: 380px;
    }

    h4 {
      position: relative;
      top: 380px;
    }
    p {
      position: relative;
      top: 380px;
    }
  }
   */

  @media (max-width: 375px) {
    h2 {
      position: relative;
      top: 10px;
    }

    h4 {
      position: relative;
      top: 10px;
    }
    p {
      position: relative;
      top: 10px;
    }
  }
`;
