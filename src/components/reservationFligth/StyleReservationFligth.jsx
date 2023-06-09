import styled from "styled-components";

export const Contenedor = styled.div`
  position: absolute;
  top: 50px;
  right: 80px;
  width: 25%;
  h1 {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
 

  @media (max-width: 900px) {
    position: relative;
    top: -1234px;
    left: -1px;
    width: 44%;
  }
  @media (max-width: 522px){
    display: flex;
    flex-direction: column;
    width: 100%;
    top: -3122px;
  }

  @media (max-width: 375px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    top: -3173px;


    h3{
      font-size: 0.8rem;
    }
  }

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

export const StyleContainer = styled.div`
  border-radius: 5px;
  background-color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  padding: 5px;
  p {
    color: var(--Gray);
    margin: 10px;
  }
 `;

export const Styletext = styled.div`
  position: relative;
  top: -30px;
  left: 8px;

  @media (max-width: 375px) {
    font-size: 0.9rem;
  }
  @media (max-width: 659px) {
    font-size: 0.9rem;
  }
`;

export const StyleFlex = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;
export const StyleExit = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0.2fr);
  grid-column-gap: 1px;
  /* grid-row-gap: 1em; */
  margin: 10px;
  h1 {
    font-size: 2rem;
  }
  img {
    height: 1px;
    width: 30px;
    position: relative;
    bottom: -30px;
    left: 12px;
  }


`;
export const StyleExit2 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0.2fr);
  grid-column-gap: 1px;
  /* grid-row-gap: 1em; */
  margin: 10px;
    @media (max-width: 375px) {
    h1 {
    font-size: 1rem;
  }
  }
  p {
    font-size: 13px;
    position: relative;
    top: -20px;
    left: -5px;
  }
  @media (max-width: 375px) {
    p {
    font-size: 9px;
    position: relative;
    top: -20px;
    left: -5px;
  }
  }
`;
