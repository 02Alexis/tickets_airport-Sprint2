import styled from "styled-components";

export const ContenedorCost = styled.div`
position: absolute;
top: 68%;
right: 80px;
width: 25%;
 h1{
  font-size: 1.2rem;
  margin-bottom: 10px;    
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

 /* @media (max-width: 900px) {
  position: relative;
    top: -3500px;
    right: -402px;
    width: 50%;
  } */

  
  @media (max-width: 375px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
    top: -3163px;
    right: 2px;
  } 

`



export const StyleContainerCost = styled.div`
border-radius: 5px;
background-color: white;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`
export const ContainerCost = styled.div`
display: grid;
grid-template-columns: 3fr 1fr; /* Crea dos columnas de igual ancho */
padding: 10px;
p{
    margin-bottom: 10px;
}

`

export const ColumnCost = styled.div`
justify-self: end;
grid-row-gap: 1em;
`
export const ContainerCostIva = styled.p`
color: green;
`


export const Contenedor = styled.div`
  position: fixed;
  top: 40%;
  right: 80px;
  width: 25%;
  h1 {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
  /* @media (max-width: 1200px) {
    position: relative;
    top: -1403px;
    width: 45%;
    right: -356px;
  } */


/* 
  @media (max-width: 758px) {
    position: relative;
    top: -1345px;
    right: -4px;
    width: 100%;
  }

  @media (max-width: 500px) {
    position: relative;
    width: 100%;
    top: -3124px;
    right: 2px;
  }
  @media (max-width: 375px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
    top: -3158px;
    right: 2px;
  } */
`;

export const StyleContainer = styled.div`
  border-radius: 5px;
  background-color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;
export const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr; /* Crea dos columnas de igual ancho */
  padding: 15px;
  p {
    margin-bottom: 9px;
    
  }
`;
export const Column = styled.div`
  justify-self: end;
  grid-row-gap: 1em;
`;

export const StyleButton = styled.div`
  button{
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
    top: 598px;
    width: 100%;
    z-index: 2;
    left: -2px;
}
  }
`;

export const StyleButtonNavigate = styled.div`
  button{
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
    top: 598px;
    width: 100%;
    z-index: 2;
    left: -2px;
}
  }
`;