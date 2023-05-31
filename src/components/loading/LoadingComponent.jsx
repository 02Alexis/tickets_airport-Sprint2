import React from 'react';
import styled, { keyframes } from 'styled-components'; //Importamos las dependencias necesarias
import Plane2 from '../../assets/plane2.svg'

// Keyframes para animar el avión
// Definimos los 'keyframes' llamado 'flyAnimation' para animar el avión. Este keyframe anima la transformación del avión desde la posición inicial en la izquierda de la pantalla (translateX(-100%)) hasta la posición final en la derecha de la pantalla (translateX(100%)).
const flyAnimation = keyframes`
  0% {
    transform: translateX(-100%); // Inicia desde la izquierda de la pantalla
  }
  100% {
    transform: translateX(100%); // Termina en la derecha de la pantalla
  }
`;

// Componente estilizado del avión
// Creamos un componente estilizado llamado 'FlyingAirplane' Este componente se utiliza para posicionar y animar el avión volador. 
const FlyingAirplane = styled.div`
  position: absolute; // Posición absoluta para que pueda volar por encima de otros elementos
  top: 20%; // Coloca el avión verticalmente
  left: 0; // Coloca el avión horizontalmente
  transform: translate(-50%, -50%); // Centra el avión exactamente
  animation: ${flyAnimation} 2s linear infinite; // Aplica la animación al avión
    width: 100%;
    height: 100%;
  img{
    width: 50%;
    height: 50%;
  }
`;

// Componente de carga principal
// Finalmente, creamos el componente principal 'LoadingComponent'. Renderiza un mensaje de "Cargando..." y el componente 'FlyingAirplane', que contiene la imagen del avión volando. 
const LoadingComponent = () => {
  return (
    <div>
      <h2>Cargando...</h2>
      <FlyingAirplane>
        <img src={ Plane2 } alt="Avión volando" />
      </FlyingAirplane>
    </div>
  );
};

export default LoadingComponent;