import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  width: 950px;

  @media (max-width: 1200px) {
    width: 100%;
    max-width: 800px;
    position: relative;
    top: 300px;
  }

  @media (max-width: 609px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    top: 428px;
  }

  @media (max-width: 375px) {
    top: 470px;
   
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

  @media (max-width: 375px) {
    margin-bottom: 20px;
    margin-left: -94px;
    position: relative;
    top: -19px;
    z-index: 2;
  }
`;

export const StyledDate = styled.div`
  margin-bottom: 1rem;

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

  @media (max-width: 1200px) {
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
  



  @media (max-width: 375px) {
   
    h2 {
      position: relative;
      top: 440px;
    }

    h4 {
      position: relative;
      top: 440px;
    }
    p {
      position: relative;
      top: 420px;
    }
  }
`;
export const StyleDeparture = styled.div`
  margin-bottom: 3rem;
  background-color: transparent;
  justify-content: space-between;

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
`;
