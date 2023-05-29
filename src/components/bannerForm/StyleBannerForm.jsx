import styled from "styled-components"

export const StyleBa = styled.div`
  margin-left: -250px;
  position: absolute;
  top: 120px;
  padding: 10px 20px;
  background: var(--DarkGry);
  width: 800px;
  box-sizing: 0 5px 25px rgba(0,0,0,0.1);
  border-radius: 15px;
  transition: 0.5s;
  box-shadow:0 10px 20px -10px rgba(0, 0, 0, 0.2);
  border: 1px solid #ddd;
  
  @media (max-width: 375px) {
    background-color: red;
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
  h1 {
    width: 100%;
    font-size: 3rem;
    padding: 10px 0;
    font-weight: 900;
    line-height: 3.7rem;
  }
  p {
    color: var(--Gray);
    font-size: 1.3rem;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 1200px){
    width: 800px;
  }

  @media screen and (max-width: 768px){
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50%;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  }

  
/* 
 */
`

export const StyleButton = styled.div`
  background: var(--White);
  width: 43%;
  border-radius: 5px;
  border: 1px solid;
  border-color: var(--Gray);
  padding: 10px 20px;
  margin-bottom: 20px;

  button{
    border: none;
    padding: 5px 10px;
    font-size: 1rem;
    line-height: 1rem;
    cursor: pointer;
  margin-right: 5px;

  &:hover{
    color: var(--White);
    background: var(--purple);
  }
  }
`